import { observer } from '@legendapp/state/react'
import { XStack } from '@my/ui'
import { appState$ } from 'app/appState'

export const ScreenWidthUpdater = observer(() => {
  return (
    <XStack
      onLayout={(event) => appState$.scale.set(Math.min(1, event.nativeEvent.layout.width / 462))}
      w="100%"
      h={2}
      pos="absolute"
    />
  )
})
