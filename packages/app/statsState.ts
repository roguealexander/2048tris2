import { observable } from '@legendapp/state'
import { z } from 'zod'
import { StatsSchema } from '../api/src/routers/tris'
import { persistObservable } from '@legendapp/state/persist'

type Stats = z.infer<typeof StatsSchema> & {
  persistCount?: number
}
type StatsActions = {
  resetStats: () => void
}

export const DefaultLowScore = 100000
export const DefaultBestTime = 10000000000

const statsInit: Stats = {
  persistCount: 0,

  gamesPlayed: 0,
  ballsDropped: 0,
  timePlayed: 0,

  scoreHigh: 0,
  scoreLow: DefaultLowScore,

  efficiency2048: 0,
  efficiency4096: 0,
  efficiency8192: 0,

  bestTime2048: DefaultBestTime,
  bestTime4096: DefaultBestTime,
  bestTime8192: DefaultBestTime,
}

export const stats$ = observable<Stats>({ ...statsInit })
export const statsActions$ = observable<StatsActions>({
  resetStats: () => {
    stats$.set({ ...statsInit })
  },
})

persistObservable(stats$, {
  local: 'highScores_V3',
})
