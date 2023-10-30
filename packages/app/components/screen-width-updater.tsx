import { observer } from '@legendapp/state/react'
import { XStack } from '@my/ui'
import { appState$ } from 'app/appState'

export const ScreenWidthUpdater = observer(() => {
  return (
    <XStack
      onLayout={(event) => appState$.boardScale.set(event.nativeEvent.layout.width / 450)}
      w={450}
      maw="100%"
      h={2}
      pos="absolute"
    />
  )
})
