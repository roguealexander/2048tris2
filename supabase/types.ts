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
          "2048_high_efficiency": number | null
          "4096_high_efficiency": number | null
          "8192_high_efficiency": number | null
          high_score: number | null
          id: string
        }
        Insert: {
          "2048_high_efficiency"?: number | null
          "4096_high_efficiency"?: number | null
          "8192_high_efficiency"?: number | null
          high_score?: number | null
          id: string
        }
        Update: {
          "2048_high_efficiency"?: number | null
          "4096_high_efficiency"?: number | null
          "8192_high_efficiency"?: number | null
          high_score?: number | null
          id?: string
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
