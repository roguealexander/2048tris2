import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { ButtonProps } from '@tamagui/button'
import { appActions$ } from 'app/appState'
import { actions$, state$ } from 'app/state'

export const NewGameButton = observer(({ ...props }: ButtonProps) => {
  return (
    <TButton
      w="100%"
      {...props}
      onPress={(event) => {
        event.preventDefault()
        event.stopPropagation()
        appActions$.triggerPopSound('8', state$.resetCount.peek())
        actions$.reset()
      }}
    >
      NEW GAME
    </TButton>
  )
})
