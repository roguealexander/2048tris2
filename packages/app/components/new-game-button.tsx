import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { ButtonProps } from '@tamagui/button'
import { appActions$, appState$ } from 'app/appState'
import { actions$, state$ } from 'app/state'
import { RotateCcw } from '@tamagui/lucide-icons'

export const NewGameButton = observer(({ ...props }: ButtonProps) => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  return (
    <TButton
      w="100%"
      {...props}
      onPress={(event) => {
        event.preventDefault()
        event.stopPropagation()
        appActions$.triggerPopSound('8', state$.resetCount.peek())
        actions$.reset()
        appState$.adAvailable.set(true)
      }}
    >
      {horizontal ? 'NEW GAME' : <RotateCcw size={20} color="$background" />}
    </TButton>
  )
})
