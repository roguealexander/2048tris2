import { observable } from '@legendapp/state'
import { z } from 'zod'
import { StatsSchema } from '../api/src/routers/tris'

type Stats = z.infer<typeof StatsSchema>
type StatsActions = {
  resetStats: () => void
}

const statsInit: Stats = {
  gamesPlayed: 0,
  ballsDropped: 0,
  timePlayed: 0,

  scoreHigh: 0,
  scoreLow: 100000,

  efficiency2048: 0,
  efficiency4096: 0,
  efficiency8192: 0,

  bestTime2048: 0,
  bestTime4096: 0,
  bestTime8192: 0,
}

export const stats$ = observable<Stats>({ ...statsInit })
export const statsActions$ = observable<StatsActions>({
  resetStats: () => {
    console.log('reset stats')
    stats$.set({ ...statsInit })
  },
})
