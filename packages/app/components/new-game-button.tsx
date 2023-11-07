import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { ButtonProps } from '@tamagui/button'
import { appActions$, appState$ } from 'app/appState'
import { actions$, state$ } from 'app/state'
import { useScale } from './useScale'
import { RotateCcw } from '@tamagui/lucide-icons'

export const NewGameButton = observer(({ ...props }: ButtonProps) => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal
  const scale = useScale()
  return (
    <TButton
      w="100%"
      aspectRatio={vertical && scale < 0.7 ? 1 : undefined}
      {...props}
      onPress={(event) => {
        event.preventDefault()
        event.stopPropagation()
        appActions$.triggerPopSound('8', state$.resetCount.peek())
        actions$.reset()
      }}
    >
      {vertical && scale < 0.7 ? <RotateCcw size={20} color="$background" /> : 'NEW GAME'}
    </TButton>
  )
})
