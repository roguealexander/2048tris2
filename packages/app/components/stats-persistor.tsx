import { observer, useObserveEffect } from '@legendapp/state/react'
import { stats$ } from 'app/statsState'
import { api } from 'app/utils/api'
import { useUser } from 'app/utils/useUser'
import { useEffect } from 'react'
import { isEqual } from 'lodash'

export const StatsPersistor = observer(() => {
  const { user } = useUser()
  const mutation = api.tris.updateUserStats.useMutation()

  useObserveEffect(stats$, ({ value }) => {
    if (value == null || user == null) return null
    mutation.mutate(value)
  })

  const { data: userStats } = api.tris.getUserStats.useQuery()

  useEffect(() => {
    if (userStats == null) return
    if (isEqual(userStats, stats$.peek())) return
    stats$.set(userStats)
  }, [userStats])

  return null
})
