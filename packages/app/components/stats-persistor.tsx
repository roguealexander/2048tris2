import { observer, useObserve } from '@legendapp/state/react'
import { stats$ } from 'app/statsState'
import { api } from 'app/utils/api'
import { useUser } from 'app/utils/useUser'
import { useEffect } from 'react'
import { isEqual } from 'lodash'

export const StatsPersistor = observer(() => {
  const { user } = useUser()
  const utils = api.useContext()
  const mutation = api.tris.updateUserStats.useMutation()

  useObserve(stats$.persistCount, async ({ value }) => {
    const stats = stats$.peek()
    if (value == null || user == null || stats == null) return null
    await mutation.mutateAsync(stats)
    utils.invalidate()
  })

  const { data: userStats } = api.tris.getUserStats.useQuery()

  useEffect(() => {
    if (userStats == null) return
    if (isEqual(userStats, stats$.peek())) return
    stats$.set(userStats)
  }, [userStats])

  return null
})
