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
      get_efficiency_2048_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          efficiency2048: number
          rank: number
        }[]
      }
      get_efficiency_4096_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          efficiency4096: number
          rank: number
        }[]
      }
      get_efficiency_8192_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          efficiency8192: number
          rank: number
        }[]
      }
      get_score_high_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          scoreHigh: number
          rank: number
        }[]
      }
      get_score_low_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          scoreLow: number
          rank: number
        }[]
      }
      get_user_efficiency_2048_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          efficiency2048: number
          rank: number
        }[]
      }
      get_user_efficiency_4096_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          efficiency4096: number
          rank: number
        }[]
      }
      get_user_efficiency_8192_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          efficiency8192: number
          rank: number
        }[]
      }
      get_user_high_score_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          scoreHigh: number
          rank: number
        }[]
      }
      get_user_low_score_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          scoreLow: number
          rank: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
