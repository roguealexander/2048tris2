import { batch, computed, observable } from '@legendapp/state'
import { TileList, TileRecord, TileSize } from './types'
import { rand } from '@ngneat/falso'
import { getTilePower, getTileRadius } from './tiles'
import { configureObservablePersistence, persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

// Global configuration
configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
})

type TileQueue = [TileSize, TileSize, TileSize, TileSize, TileSize, TileSize]
type EfficiencyTile = '2048' | '4096' | '8192'

type HighScores = {
  points: number
  efficiency_2048: number
  efficiency_4096: number
  efficiency_8192: number
}

export const highScores$ = observable<HighScores>({
  points: 0,
  efficiency_2048: 0,
  efficiency_4096: 0,
  efficiency_8192: 0,
})
persistObservable(highScores$, {
  local: 'highScores',
})

type GameState = {
  toppedOut: boolean
  resetting: boolean
  gamePhysicsPaused: boolean
  gameInteractionPaused: boolean
  resetCount: number

  activeTile: TileSize
  heldTile: TileSize | null
  holdShakeCount: number
  queue: TileQueue
  holdAvailable: boolean
  points: number

  mouseX: number
  dropX: number

  activeTileCount: TileRecord<number>
  maxTilesCount: number
  largestTile: TileSize
  efficiency: number
  targetEfficiency: EfficiencyTile
  targetHighEfficiency: number

  activeHighEfficiencyPanel: EfficiencyTile | null
  activeHighEfficiencyValue: number | null
}

type GameActions = {
  drop: () => void
  hold: () => void
  reset: () => void
  topOut: () => void
  triggerHighEfficiencyCheck: (size: EfficiencyTile) => void
  closeActiveHighEfficiencyPanel: () => void
}

export const getQueueTile = (): TileSize => {
  // return '128'
  return rand(['2', '2', '2', '4', '4', '4', '8', '8', '8', '16', '16', '32'])
}
const constructInitialQueue = (): TileQueue => {
  return [
    getQueueTile(),
    getQueueTile(),
    getQueueTile(),
    getQueueTile(),
    getQueueTile(),
    getQueueTile(),
  ]
}

export const state$ = observable<GameState>({
  toppedOut: false,
  resetting: false,
  gamePhysicsPaused: computed((): boolean => {
    return state$.toppedOut.get() || state$.resetting.get()
  }),
  gameInteractionPaused: computed((): boolean => {
    return (
      state$.toppedOut.get() ||
      state$.resetting.get() ||
      state$.activeHighEfficiencyPanel.get() !== null
    )
  }),
  resetCount: 0,

  activeTile: getQueueTile(),
  heldTile: null,
  holdShakeCount: 0,
  queue: constructInitialQueue(),
  holdAvailable: true,
  points: 0,

  mouseX: 0,
  dropX: computed((): number => {
    const radius = getTileRadius(state$.activeTile.get())
    return Math.min(Math.max(64 + radius / 2, state$.mouseX.get()), 64 + 450 - radius / 2)
  }),

  activeTileCount: {
    '2': 0,
    '4': 0,
    '8': 0,
    '16': 0,
    '32': 0,
    '64': 0,
    '128': 0,
    '256': 0,
    '512': 0,
    '1024': 0,
    '2048': 0,
    '4096': 0,
    '8192': 0,
  },
  maxTilesCount: computed((): number => {
    let maxCount = 0

    Object.values(state$.activeTileCount.get()).forEach((count) => {
      if (count > maxCount) {
        maxCount = count
      }
    })

    return maxCount
  }),
  largestTile: computed((): TileSize => {
    return (Object.keys(state$.activeTileCount.get())
      .reverse()
      .find((size) => state$.activeTileCount[size as TileSize].peek() > 0) ?? '2') as TileSize
  }),
  efficiency: computed((): number => {
    const activeTileCount = state$.activeTileCount.get()

    const largestTile =
      [...TileList].reverse().find((size) => {
        return activeTileCount[size] > 0
      }) ?? '2'


    const largestTilePoints = activeTileCount[largestTile] * parseInt(largestTile)

    if (largestTilePoints === 0) return 0


    return Math.round(10000 * (largestTilePoints / state$.points.get())) / 100
  }),
  targetEfficiency: '2048',
  targetHighEfficiency: computed((): number => {
    switch (state$.targetEfficiency.get()) {
      case '2048':
        return highScores$.efficiency_2048.get()
      case '4096':
        return highScores$.efficiency_4096.get()
      case '8192':
        return highScores$.efficiency_8192.get()
    }
  }),

  activeHighEfficiencyPanel: null,
  activeHighEfficiencyValue: computed((): number | null => {
    const activeHighEfficiencyPanel = state$.activeHighEfficiencyPanel.get()

    switch (activeHighEfficiencyPanel) {
      case null:
        return null
      case '2048':
        return highScores$.efficiency_2048.peek()
      case '4096':
        return highScores$.efficiency_4096.peek()
      case '8192':
        return highScores$.efficiency_8192.peek()
    }
    
  })
})

const incrementHoldShakeCount = () => {
  state$.holdShakeCount.set((count) => count + 1)
}

const pullActiveTileFromQueue = () => {
  state$.activeTile.set(state$.queue[0]!.peek())
}

const advanceQueue = () => {
  state$.queue.set((queue: TileQueue) => queue.slice(1).concat(getQueueTile()) as TileQueue)
}

const setHeldTile = (tile: TileSize) => {
  state$.heldTile.set(tile)
}

const addPoints = (additional: number) => {
  state$.points.set((points) => points + additional)
}

const resetHoldAvailable = () => {
  state$.holdAvailable.set(true)
}

const swapActiveAndHeldTiles = () => {
  const heldTile = state$.heldTile.peek()
  const activeTile = state$.activeTile.peek()
  state$.heldTile.set(activeTile)
  state$.activeTile.set(heldTile)
  state$.holdAvailable.set(false)
}

export const actions$ = observable<GameActions>({
  drop: () => {
    batch(() => {
      const activeTile = state$.activeTile.peek()

      addPoints(parseInt(activeTile))
      pullActiveTileFromQueue()
      advanceQueue()
      resetHoldAvailable()
    })
  },
  hold: () => {
    batch(() => {
      // Exit if hold action already used
      const holdAvailable = state$.holdAvailable.peek()
      if (!holdAvailable) {
        incrementHoldShakeCount()
        return
      }

      // If no tile in hold, pull from queue
      const heldTile = state$.heldTile.peek()
      if (heldTile == null) {
        setHeldTile(state$.activeTile.peek())
        pullActiveTileFromQueue()
        advanceQueue()
        return
      }

      // Switch active and held tiles
      swapActiveAndHeldTiles()
    })
  },
  reset: () => {
    batch(() => {
      state$.toppedOut.set(false)
      state$.resetting.set(true)
      state$.resetCount.set((count) => (count += 1))

      state$.activeTile.set(getQueueTile())
      state$.heldTile.set(null)
      state$.queue.set(constructInitialQueue())
      state$.holdAvailable.set(true)
      state$.points.set(0)

      state$.activeTileCount.set({
        '2': 0,
        '4': 0,
        '8': 0,
        '16': 0,
        '32': 0,
        '64': 0,
        '128': 0,
        '256': 0,
        '512': 0,
        '1024': 0,
        '2048': 0,
        '4096': 0,
        '8192': 0,
      })

      state$.targetEfficiency.set('2048')
      state$.activeHighEfficiencyPanel.set(null)
    })
  },
  topOut: () => {
    batch(() => {
      if (state$.points.peek() > highScores$.points.peek()) {
        highScores$.points.set(state$.points.peek())
      }
      state$.toppedOut.set(true)
    })
  },
  triggerHighEfficiencyCheck: (size: EfficiencyTile) => {
    const efficiency = state$.efficiency.peek()
    batch(() => {
      switch (size) {
        case '2048': {
          if (efficiency > highScores$.efficiency_2048.peek()) {
            highScores$.efficiency_2048.set(efficiency)
            state$.activeHighEfficiencyPanel.set('2048')
          } else {
            state$.targetEfficiency.set('4096')
          }
          break;
        }
        case '4096': {
          if (efficiency > highScores$.efficiency_4096.peek()) {
            highScores$.efficiency_4096.set(efficiency)
            state$.activeHighEfficiencyPanel.set('4096')
          } else {
            state$.targetEfficiency.set('8192')
          }
          break
        }
        case '8192': {
          if (efficiency > highScores$.efficiency_8192.peek()) {
            highScores$.efficiency_8192.set(efficiency)
            state$.activeHighEfficiencyPanel.set('8192')
          } else {
            state$.targetEfficiency.set('8192')
          }
          break
        }
      }
    })
  },
  closeActiveHighEfficiencyPanel: () => {
    const activeHighEfficiencyPanel = state$.activeHighEfficiencyPanel.get()
    if (activeHighEfficiencyPanel == null) return

    batch(() => {
      // Increment target efficiency
      switch (activeHighEfficiencyPanel) {
        case '2048':
          state$.targetEfficiency.set('4096')
        case '4096':
          state$.targetEfficiency.set('8192')
        case '8192':
          state$.targetEfficiency.set('8192')
      }

      // Close panel
      state$.activeHighEfficiencyPanel.set(null)
    })
  },
})
