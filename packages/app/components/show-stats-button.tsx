import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { ButtonProps } from '@tamagui/button'
import { appState$ } from 'app/appState'
import { BarChart3 } from '@tamagui/lucide-icons'

export const ShowStatsButton = observer(({ ...props }: ButtonProps) => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  return (
    <TButton
      w="100%"
      {...props}
      onPress={(event) => {
        event.preventDefault()
        event.stopPropagation()
        appState$.statsPanelOpen.set(true)
      }}
    >
      {horizontal ? 'STATS' : <BarChart3 size={20} color="$background" />}
    </TButton>
  )
})
