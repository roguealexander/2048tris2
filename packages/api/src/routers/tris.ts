import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { z } from 'zod'

export const StatsSchema = z.object({
  gamesPlayed: z.number(),
  ballsDropped: z.number(),

  scoreHigh: z.number().nullable(),
  scoreLow: z.number().nullable(),

  efficiency2048: z.number().nullable(),
  efficiency4096: z.number().nullable(),
  efficiency8192: z.number().nullable(),
})
type Stats = z.infer<typeof StatsSchema>

export const LeaderboardTypeSchema = z.union([
  z.literal('scoreHigh'),
  z.literal('scoreLow'),
  z.literal('efficiency2048'),
  z.literal('efficiency4096'),
  z.literal('efficiency8192'),
])

export type LeaderboardType = z.infer<typeof LeaderboardTypeSchema>

const mergeNullable = (
  a: number | null,
  b: number | null,
  mergeFn: (a: number, b: number) => number
) => {
  if (a == null && b == null) return null
  if (a == null) return b
  if (b == null) return a
  return mergeFn(a, b)
}

const mergeStats = (a: Stats, b: Stats): Stats => {
  return {
    gamesPlayed: Math.max(a.gamesPlayed, b.gamesPlayed),
    ballsDropped: Math.max(a.ballsDropped, b.ballsDropped),

    scoreHigh: mergeNullable(a.scoreHigh, b.scoreHigh, Math.max),
    scoreLow: mergeNullable(a.scoreLow, b.scoreLow, Math.min),

    efficiency2048: mergeNullable(a.efficiency2048, b.efficiency2048, Math.max),
    efficiency4096: mergeNullable(a.efficiency4096, b.efficiency4096, Math.max),
    efficiency8192: mergeNullable(a.efficiency8192, b.efficiency8192, Math.max),
  }
}

export const trisRouter = createTRPCRouter({
  getUserStats: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .match({ id: session.user.id })
      .limit(1)
      .single()

    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }

    return data as Stats
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

      const { error } = await supabase
        .from('users')
        .update(mergeStats(existingStats, input))
        .eq('id', session.user.id)

      if (error != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
      }
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
    const { data, error } = await supabase
      .from('users')
      .select('id, name, scoreHigh')
      .order('scoreHigh', { ascending: false, nullsFirst: false })
      .limit(10)
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getLowScoreLeaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, scoreLow')
      .order('scoreLow', { ascending: true, nullsFirst: false })
      .limit(10)
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getEfficiency2048Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, efficiency2048')
      .order('efficiency2048', { ascending: false, nullsFirst: false })
      .limit(10)
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getEfficiency4096Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, efficiency4096')
      .order('efficiency4096', { ascending: false, nullsFirst: false })
      .limit(10)
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
  getEfficiency8192Leaderboard: publicProcedure.query(async ({ ctx: { supabase } }) => {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, efficiency8192')
      .order('efficiency8192', { ascending: false, nullsFirst: false })
      .limit(10)
    if (error != null) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
    }
    return data
  }),
})
