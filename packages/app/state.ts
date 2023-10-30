import { batch, computed, observable } from '@legendapp/state'
import { EfficiencyTile, TileList, TileQueue, TileRecord, TileSize } from './types'
import { rand } from '@ngneat/falso'
import { stats$ } from './statsState'

type GameState = {
  started: boolean
  toppedOut: boolean
  resetting: boolean
  resetCount: number

  activeTile: TileSize
  heldTile: TileSize | null
  holdShakeKey: string | null
  queue: TileQueue
  holdAvailable: boolean
  ballsDropped: number

  activeTileCount: TileRecord<number>
  targetEfficiency: EfficiencyTile
  activeHighEfficiencyPanel: EfficiencyTile | null
}
type GameStateComputed = {
  score: number
  efficiency: number

  gamePhysicsPaused: boolean
  gameInteractionPaused: boolean

  maxTilesCount: number
  largestTile: TileSize
  targetHighEfficiency: number
  activeHighEfficiencyValue: number | null
}

type GameActions = {
  start: () => void
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

const getInitGameState = (): Omit<GameState, 'started' | 'resetCount' | 'holdShakeKey'> => ({
  toppedOut: false,
  resetting: false,
  activeTile: getQueueTile(),
  heldTile: null,
  queue: constructInitialQueue(),
  holdAvailable: true,
  ballsDropped: 0,

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

  targetEfficiency: '2048',
  activeHighEfficiencyPanel: null,
})

const getScoreFromTiles = (activeTiles: TileRecord<number>) => {
  return TileList.reduce((acc, tile) => {
    return acc + activeTiles[tile] * parseInt(tile)
  }, 0)
}

export const state$ = observable<GameState & GameStateComputed>({
  // STATE
  started: true,
  ...getInitGameState(),
  resetCount: 0,
  holdShakeKey: null,

  // COMPUTED
  gamePhysicsPaused: computed((): boolean => {
    return !state$.started.get() || state$.toppedOut.get() || state$.resetting.get()
  }),
  gameInteractionPaused: computed((): boolean => {
    return (
      !state$.started.get() ||
      state$.toppedOut.get() ||
      state$.resetting.get() ||
      state$.activeHighEfficiencyPanel.get() !== null
    )
  }),

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
  score: computed((): number => getScoreFromTiles(state$.activeTileCount.get())),
  efficiency: computed((): number => {
    const activeTileCount = state$.activeTileCount.get()

    const score = getScoreFromTiles(activeTileCount)

    const largestTile =
      [...TileList].reverse().find((size) => {
        return activeTileCount[size] > 0
      }) ?? '2'

    const largestTilePoints = activeTileCount[largestTile] * parseInt(largestTile)

    if (largestTilePoints === 0) return 0

    return Math.round(10000 * (largestTilePoints / score)) / 100
  }),
  targetHighEfficiency: computed((): number => {
    switch (state$.targetEfficiency.get()) {
      case '2048':
        return stats$.efficiency2048.get()
      case '4096':
        return stats$.efficiency4096.get()
      case '8192':
        return stats$.efficiency8192.get()
    }
  }),

  activeHighEfficiencyValue: computed((): number | null => {
    const activeHighEfficiencyPanel = state$.activeHighEfficiencyPanel.get()

    switch (activeHighEfficiencyPanel) {
      case null:
        return null
      case '2048':
        return stats$.efficiency2048.peek()
      case '4096':
        return stats$.efficiency4096.peek()
      case '8192':
        return stats$.efficiency8192.peek()
    }
  }),
})

const incrementBallsDropped = () => {
  state$.ballsDropped.set((count) => count + 1)
}

const incrementHoldShakeCount = () => {
  state$.holdShakeKey.set((key) => (key == null ? '0' : `${parseInt(key) + 1}`))
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
  start: () => {
    state$.started.set(true)
  },
  drop: () => {
    batch(() => {
      pullActiveTileFromQueue()
      advanceQueue()
      resetHoldAvailable()
      incrementBallsDropped()
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
    state$.set((currState) => ({
      ...currState,
      ...getInitGameState(),
      resetting: true,
      resetCount: currState.resetCount + 1,
    }))
  },
  topOut: () => {
    batch(() => {
      // Update high scores
      if (state$.score.peek() < (stats$.scoreLow.peek() ?? Infinity)) {
        stats$.scoreLow.set(state$.score.peek())
      }
      if (state$.score.peek() > (stats$.scoreHigh.peek() ?? 0)) {
        stats$.scoreHigh.set(state$.score.peek())
      }
      state$.toppedOut.set(true)

      // Update games played
      stats$.gamesPlayed.set((count) => count + 1)

      // Update balls dropped
      stats$.ballsDropped.set((ballsDropped) => ballsDropped + state$.ballsDropped.peek())
    })
  },
  triggerHighEfficiencyCheck: (size: EfficiencyTile) => {
    const efficiency = state$.efficiency.peek()
    batch(() => {
      switch (size) {
        case '2048': {
          if (efficiency > stats$.efficiency2048.peek()) {
            stats$.efficiency2048.set(efficiency)
            state$.activeHighEfficiencyPanel.set('2048')
          } else {
            state$.targetEfficiency.set('4096')
          }
          break
        }
        case '4096': {
          if (efficiency > stats$.efficiency4096.peek()) {
            stats$.efficiency4096.set(efficiency)
            state$.activeHighEfficiencyPanel.set('4096')
          } else {
            state$.targetEfficiency.set('8192')
          }
          break
        }
        case '8192': {
          if (efficiency > stats$.efficiency8192.peek()) {
            stats$.efficiency8192.set(efficiency)
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
          break
        case '4096':
          state$.targetEfficiency.set('8192')
          break
        case '8192':
          state$.targetEfficiency.set('8192')
          break
      }

      // Close panel
      state$.activeHighEfficiencyPanel.set(null)
    })
  },
})
