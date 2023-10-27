import { observer, useObserve } from '@legendapp/state/react'
import { stats$ } from 'app/statsState'
import { api } from 'app/utils/api'
import { useUser } from 'app/utils/useUser'

export const StatsPersistor = observer(() => {
  const { user } = useUser()
  const mutation = api.tris.updateUserStats.useMutation()

  useObserve(stats$, ({ value }) => {
    if (value == null || user == null) return null
    mutation.mutate(value)
  })

  return null
})
