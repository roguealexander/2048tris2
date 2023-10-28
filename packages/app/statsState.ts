import { observable } from '@legendapp/state'
import { configureObservablePersistence, persistObservable } from '@legendapp/state/persist'
import { z } from 'zod'
import { StatsSchema } from '../api/src/routers/tris'
import { pluginLocal } from './persistence'

type Stats = z.infer<typeof StatsSchema>
type StatsActions = {
  resetStats: () => void
}

const statsInit: Stats = {
  gamesPlayed: 0,
  ballsDropped: 0,

  scoreHigh: 0,
  scoreLow: 100000,

  efficiency2048: 0,
  efficiency4096: 0,
  efficiency8192: 0,
}

export const stats$ = observable<Stats>({ ...statsInit })
export const statsActions$ = observable<StatsActions>({
  resetStats: () => {
    console.log('reset stats')
    stats$.set({ ...statsInit })
  },
})

// Global configuration
configureObservablePersistence({
  // Use localStorage in React
  // Use react-native-mmkv in React Native
  pluginLocal,
})

persistObservable(stats$, {
  local: 'highScores_v2',
})
