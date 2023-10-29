import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { z } from 'zod'

export const StatsSchema = z.object({
  gamesPlayed: z.number(),
  ballsDropped: z.number(),

  scoreHigh: z.number(),
  scoreLow: z.number(),

  efficiency2048: z.number(),
  efficiency4096: z.number(),
  efficiency8192: z.number(),
})
type Stats = z.infer<typeof StatsSchema>

export const LeaderboardTypeSchema = z.union([
  z.literal('scoreHigh'),
  z.literal('scoreLow'),
  z.literal('efficiency2048'),
  z.literal('efficiency4096'),
  z.literal('efficiency8192'),
])

const statsSelect =
  'scoreHigh, scoreLow, efficiency2048, efficiency4096, efficiency8192, gamesPlayed, ballsDropped' as const

export type LeaderboardType = z.infer<typeof LeaderboardTypeSchema>

const mergeStats = (a: Stats, b: Stats): Stats => {
  return {
    gamesPlayed: Math.max(a.gamesPlayed, b.gamesPlayed),
    ballsDropped: Math.max(a.ballsDropped, b.ballsDropped),

    scoreHigh: Math.max(a.scoreHigh, b.scoreHigh),
    scoreLow: Math.min(a.scoreLow, b.scoreLow),

    efficiency2048: Math.max(a.efficiency2048, b.efficiency2048),
    efficiency4096: Math.max(a.efficiency4096, b.efficiency4096),
    efficiency8192: Math.max(a.efficiency8192, b.efficiency8192),
  }
}

export const trisRouter = createTRPCRouter({
  getUserStats: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {
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
        scoreHigh: 0,
        scoreLow: 100000,
        efficiency2048: 0,
        efficiency4096: 0,
        efficiency8192: 0,
      })
      .eq('id', session.user.id)

    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
  }),
  updateUserStats: protectedProcedure
    .input(StatsSchema)
    .mutation(async ({ ctx: { supabase, session }, input }) => {
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
        .update(mergeStats(existingStats, input))
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
  getUserScoreHighRank: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {
    const { data, error } = await supabase.rpc('get_user_high_score_leaderboard', {
      user_id: session.user.id,
    })
    console.log({
      data,
      error,
    })
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getUserLeaderboards: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {
    const user_id = session.user.id
    const [
      { data: highScoreData, error: highScoreError },
      { data: lowScoreData, error: lowScoreError },
      { data: efficiency2048Data, error: efficiency2048Error },
      { data: efficiency4096Data, error: efficiency4096Error },
      { data: efficiency8192Data, error: efficiency8192Error },
    ] = await Promise.all([
      supabase.rpc('get_user_high_score_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_low_score_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_efficiency_2048_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_efficiency_4096_leaderboard', { user_id }).limit(1).single(),
      supabase.rpc('get_user_efficiency_8192_leaderboard', { user_id }).limit(1).single(),
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

    return {
      scoreHigh: highScoreData,
      scoreLow: lowScoreData,
      efficiency2048: efficiency2048Data,
      efficiency4096: efficiency4096Data,
      efficiency8192: efficiency8192Data,
    }
  }),
})
