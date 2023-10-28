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
      users: {
        Row: {
          ballsDropped: number
          efficiency2048: number
          efficiency4096: number
          efficiency8192: number
          gamesPlayed: number
          id: string
          muted: boolean
          name: string
          scoreHigh: number
          scoreLow: number
        }
        Insert: {
          ballsDropped?: number
          efficiency2048?: number
          efficiency4096?: number
          efficiency8192?: number
          gamesPlayed?: number
          id: string
          muted?: boolean
          name: string
          scoreHigh?: number
          scoreLow?: number
        }
        Update: {
          ballsDropped?: number
          efficiency2048?: number
          efficiency4096?: number
          efficiency8192?: number
          gamesPlayed?: number
          id?: string
          muted?: boolean
          name?: string
          scoreHigh?: number
          scoreLow?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
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
