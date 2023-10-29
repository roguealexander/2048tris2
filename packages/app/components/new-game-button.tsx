import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { appActions$ } from 'app/appState'
import { actions$, state$ } from 'app/state'

export const NewGameButton = observer(() => {
  return (
    <TButton
      w="100%"
      onPress={() => {
        appActions$.triggerPopSound('8', state$.resetCount.peek())
        actions$.reset()
      }}
    >
      NEW GAME
    </TButton>
  )
})
