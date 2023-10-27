import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure } from '../trpc'
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
      .from('stats')
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
        .from('stats')
        .select('*')
        .match({ id: session.user.id })
        .limit(1)
        .single()

      if (existingStatsError != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: existingStatsError.message })
      }

      const { error } = await supabase
        .from('stats')
        .update(mergeStats(existingStats, input))
        .eq('id', session.user.id)

      if (error != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
      }
    }),
})
