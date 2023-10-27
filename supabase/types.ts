export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      stats: {
        Row: {
          ballsDropped: number
          efficiency2048: number | null
          efficiency4096: number | null
          efficiency8192: number | null
          gamesPlayed: number
          id: string
          scoreHigh: number | null
          scoreLow: number | null
        }
        Insert: {
          ballsDropped?: number
          efficiency2048?: number | null
          efficiency4096?: number | null
          efficiency8192?: number | null
          gamesPlayed?: number
          id: string
          scoreHigh?: number | null
          scoreLow?: number | null
        }
        Update: {
          ballsDropped?: number
          efficiency2048?: number | null
          efficiency4096?: number | null
          efficiency8192?: number | null
          gamesPlayed?: number
          id?: string
          scoreHigh?: number | null
          scoreLow?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stats_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
