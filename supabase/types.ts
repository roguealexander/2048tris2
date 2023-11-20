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
          bestTime2048: number
          bestTime4096: number
          bestTime8192: number
          efficiency2048: number
          efficiency4096: number
          efficiency8192: number
          gamesPlayed: number
          id: string
          muted: boolean
          name: string
          scoreHigh: number
          scoreLow: number
          timePlayed: number
        }
        Insert: {
          ballsDropped?: number
          bestTime2048?: number
          bestTime4096?: number
          bestTime8192?: number
          efficiency2048?: number
          efficiency4096?: number
          efficiency8192?: number
          gamesPlayed?: number
          id: string
          muted?: boolean
          name: string
          scoreHigh?: number
          scoreLow?: number
          timePlayed?: number
        }
        Update: {
          ballsDropped?: number
          bestTime2048?: number
          bestTime4096?: number
          bestTime8192?: number
          efficiency2048?: number
          efficiency4096?: number
          efficiency8192?: number
          gamesPlayed?: number
          id?: string
          muted?: boolean
          name?: string
          scoreHigh?: number
          scoreLow?: number
          timePlayed?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
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
      get_best_time_2048_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          besttime2048: number
          rank: number
        }[]
      }
      get_best_time_4096_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          besttime4096: number
          rank: number
        }[]
      }
      get_best_time_8192_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          besttime8192: number
          rank: number
        }[]
      }
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
      get_user_best_time_2048_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          besttime2048: number
          rank: number
        }[]
      }
      get_user_best_time_4096_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          besttime4096: number
          rank: number
        }[]
      }
      get_user_best_time_8192_leaderboard: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          name: string
          besttime8192: number
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
