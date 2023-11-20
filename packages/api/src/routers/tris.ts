import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { z } from 'zod'

const DefaultLowScore = 100000
const DefaultBestTime = 10000000000

export const StatsSchema = z.object({
  gamesPlayed: z.number(),
  ballsDropped: z.number(),
  timePlayed: z.number(),

  scoreHigh: z.number(),
  scoreLow: z.number(),

  efficiency2048: z.number(),
  efficiency4096: z.number(),
  efficiency8192: z.number(),

  bestTime2048: z.number(),
  bestTime4096: z.number(),
  bestTime8192: z.number(),
})
const PartialStatsSchema = StatsSchema.partial({
  timePlayed: true,

  bestTime2048: true,
  bestTime4096: true,
  bestTime8192: true,
})
type Stats = z.infer<typeof StatsSchema>

export const LeaderboardTypeSchema = z.union([
  z.literal('scoreHigh'),
  z.literal('scoreLow'),
  z.literal('efficiency2048'),
  z.literal('efficiency4096'),
  z.literal('efficiency8192'),
  z.literal('bestTime2048'),
  z.literal('bestTime4096'),
  z.literal('bestTime8192'),
])

const statsSelect =
  'scoreHigh, scoreLow, efficiency2048, efficiency4096, efficiency8192, bestTime2048, bestTime4096, bestTime8192, gamesPlayed, ballsDropped, timePlayed' as const

export type LeaderboardType = z.infer<typeof LeaderboardTypeSchema>

const dePartialStats = (stats: z.infer<typeof PartialStatsSchema>): Stats => {
  return {
    ...stats,
    timePlayed: stats.timePlayed ?? 0,
    bestTime2048: stats.bestTime2048 ?? DefaultBestTime,
    bestTime4096: stats.bestTime4096 ?? DefaultBestTime,
    bestTime8192: stats.bestTime8192 ?? DefaultBestTime,
  }
}

const mergeStats = (a: Stats, b: Stats): Stats => {
  return {
    gamesPlayed: Math.max(a.gamesPlayed, b.gamesPlayed),
    ballsDropped: Math.max(a.ballsDropped, b.ballsDropped),
    timePlayed: Math.max(a.timePlayed, b.timePlayed),

    scoreHigh: Math.max(a.scoreHigh, b.scoreHigh),
    scoreLow: Math.min(a.scoreLow, b.scoreLow),

    efficiency2048: Math.max(a.efficiency2048, b.efficiency2048),
    efficiency4096: Math.max(a.efficiency4096, b.efficiency4096),
    efficiency8192: Math.max(a.efficiency8192, b.efficiency8192),

    bestTime2048: Math.min(a.bestTime2048, b.bestTime2048),
    bestTime4096: Math.min(a.bestTime4096, b.bestTime4096),
    bestTime8192: Math.min(a.bestTime8192, b.bestTime8192),
  }
}

export const trisRouter = createTRPCRouter({
  getUserStats: publicProcedure.query(async ({ ctx: { supabase, session } }) => {
    if (session?.user == null) return null

    const { data, error } = await supabase
      .from('users')
      .select(statsSelect)
      .match({ id: session.user.id })
      .limit(1)
      .single()

    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }

    return data as Stats
  }),
  resetUserStats: protectedProcedure.mutation(async ({ ctx: { supabase, session } }) => {
    const { error } = await supabase
      .from('users')
      .update({
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
      })
      .eq('id', session.user.id)

    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
  }),
  updateUserStats: protectedProcedure
    .input(PartialStatsSchema)
    .mutation(async ({ ctx: { supabase, session }, input }) => {
      const stats = dePartialStats(input)
      const { data: existingStats, error: existingStatsError } = await supabase
        .from('users')
        .select('*')
        .match({ id: session.user.id })
        .limit(1)
        .single()

      if (existingStatsError != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: existingStatsError.message })
      }

      const { data, error } = await supabase
        .from('users')
        .update(mergeStats(existingStats, stats))
        .eq('id', session.user.id)
        .select(statsSelect)
        .single()

      if (error != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
      }

      const parsed = StatsSchema.safeParse(data)
      if (!parsed.success) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: parsed.error.message })
      }

      return parsed.data as Stats
    }),
  getLeaderboard: publicProcedure
    .input(LeaderboardTypeSchema)
    .query(async ({ ctx: { supabase }, input }) => {
      const { data, error } = await supabase.from('users').select(`id, name, ${input}`).limit(10)
      if (error != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
      }
      return data
    }),
  getHighScoreLeaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_score_high_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getLowScoreLeaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_score_low_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getEfficiency2048Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_efficiency_2048_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getEfficiency4096Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_efficiency_4096_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getEfficiency8192Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_efficiency_8192_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getBestTime2048Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_best_time_2048_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getBestTime4096Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_best_time_4096_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getBestTime8192Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase.rpc('get_best_time_8192_leaderboard')
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getUserScoreHighRank: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {
    const { data, error } = await supabase.rpc('get_user_high_score_leaderboard', {
      user_id: session.user.id,
    })
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getUserLeaderboards: publicProcedure.query(async ({ ctx: { supabase, session } }) => {
    const user_id = session?.user.id
    if (user_id == null) return null

    const [
      { data: highScoreData, error: highScoreError },
      { data: lowScoreData, error: lowScoreError },
      { data: efficiency2048Data, error: efficiency2048Error },
      { data: efficiency4096Data, error: efficiency4096Error },
      { data: efficiency8192Data, error: efficiency8192Error },
      { data: bestTime2048Data, error: bestTime2048Error },
      { data: bestTime4096Data, error: bestTime4096Error },
      { data: bestTime8192Data, error: bestTime8192Error },
    ] = await Promise.all([
      supabase.rpc('get_user_high_score_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_low_score_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_efficiency_2048_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_efficiency_4096_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_efficiency_8192_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_best_time_2048_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_best_time_4096_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_best_time_8192_leaderboard', { user_id }).limit(1).single(),
    ])

    if (highScoreError != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: highScoreError.message })
    }
    if (lowScoreError != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: lowScoreError.message })
    }
    if (efficiency2048Error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: efficiency2048Error.message })
    }
    if (efficiency4096Error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: efficiency4096Error.message })
    }
    if (efficiency8192Error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: efficiency8192Error.message })
    }
    if (bestTime2048Error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: bestTime2048Error.message })
    }
    if (bestTime4096Error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: bestTime4096Error.message })
    }
    if (bestTime8192Error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: bestTime8192Error.message })
    }

    return {
      scoreHigh: highScoreData,
      scoreLow: lowScoreData,
      efficiency2048: efficiency2048Data,
      efficiency4096: efficiency4096Data,
      efficiency8192: efficiency8192Data,
      bestTime2048: bestTime2048Data,
      bestTime4096: bestTime4096Data,
      bestTime8192: bestTime8192Data,
    }
  }),
})
