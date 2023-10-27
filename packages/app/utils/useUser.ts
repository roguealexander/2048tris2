import { useQuery } from '@tanstack/react-query'
import { useSessionContext } from './supabase/useSessionContext'
import { useSupabase } from './supabase/useSupabase'

// export const useUser = () => {
//   const { session, isLoading: isLoadingSession } = useSessionContext()
//   const user = session?.user
//   const supabase = useSupabase()
//   const {
//     data: profile,
//     isLoading: isLoadingProfile,
//     refetch,
//   } = useQuery(['profile'], {
//     queryFn: async () => {
//       if (!user?.id) return null
//       const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single()
//       if (error) {
//         // no rows - edge case of user being deleted
//         if (error.code === 'PGRST116') {
//           await supabase.auth.signOut()
//           return null
//         }
//         throw new Error(error.message)
//       }
//       return data
//     },
//   })

//   return {
//     session,
//     user,
//     profile,
//     updateProfile: () => refetch(),
//     isLoadingSession,
//     isLoadingProfile,
//     isLoading: isLoadingSession || isLoadingProfile,
//   }
// }

export const useUser = () => {
  const { session, isLoading } = useSessionContext()
  const user = session?.user

  return {
    session,
    user,
    isLoading,
  }
}
