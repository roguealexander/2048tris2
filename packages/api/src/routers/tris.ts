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

export const trisRouter = createTRPCRouter({
  getUserStats: protectedProcedure.query(async ({ ctx: { supabase, session }, input }) => {
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
      const { error } = await supabase.from('stats').update(input).eq('id', session.user.id)

      if (error != null) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
      }
    }),
})
