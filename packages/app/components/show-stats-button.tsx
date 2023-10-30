import { observer } from '@legendapp/state/react'
import { TButton } from '@my/ui'
import { ButtonProps } from '@tamagui/button'
import { appState$ } from 'app/appState'

export const ShowStatsButton = observer(({ ...props }: ButtonProps) => {
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
      STATS
    </TButton>
  )
})
