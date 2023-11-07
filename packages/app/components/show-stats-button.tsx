import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { ButtonProps } from '@tamagui/button'
import { appState$ } from 'app/appState'
import { useScale } from './useScale'
import { BarChart3 } from '@tamagui/lucide-icons'

export const ShowStatsButton = observer(({ ...props }: ButtonProps) => {
  const scale = useScale()
  return (
    <TButton
      w="100%"
      aspectRatio={scale < 0.7 ? 1 : undefined}
      {...props}
      onPress={(event) => {
        event.preventDefault()
        event.stopPropagation()
        appState$.statsPanelOpen.set(true)
      }}
    >
      {scale < 0.7 ? <BarChart3 size={20} color="$background" /> : 'STATS'}
    </TButton>
  )
})
