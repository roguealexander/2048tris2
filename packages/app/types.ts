import { LeaderboardTypeSchema } from '@my/api/src/routers/tris'
import { z } from 'zod'

export const TilePowerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const
export type TilePower = (typeof TilePowerList)[number]

export const TileList = [
  '2',
  '4',
  '8',
  '16',
  '32',
  '64',
  '128',
  '256',
  '512',
  '1024',
  '2048',
  '4096',
  '8192',
] as const
export type TileSize = (typeof TileList)[number]
export type TileRecord<T> = Record<TileSize, T>

export type TileData = {
  size: TileSize
  power: TilePower
  radius: number
  mass: number
  density: number
  color: string
  textColor: string
}

export type LeaderboardType = z.infer<typeof LeaderboardTypeSchema>

export type TileQueue = [TileSize, TileSize, TileSize, TileSize, TileSize, TileSize]
export type EfficiencyTile = '2048' | '4096' | '8192'
