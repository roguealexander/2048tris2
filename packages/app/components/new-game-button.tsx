import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { actions$, state$ } from 'app/state'

export const NewGameButton = observer(() => {
  if (!state$.started.get()) return null
  return (
    <TButton w="100%" onPress={actions$.reset}>
      NEW GAME
    </TButton>
  )
})
