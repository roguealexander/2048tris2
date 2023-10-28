import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { actions$ } from 'app/state'

export const NewGameButton = observer(() => {
  return (
    <TButton w="100%" onPress={actions$.reset}>
      NEW GAME
    </TButton>
  )
})
