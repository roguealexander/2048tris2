import { observer } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { PanelOrOverlayContainer } from './panel-or-overlay-container'
import { TButton, TSizableText, XStack, YStack } from '@my/ui'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { Score, Efficiency } from './stats'

export const StatsPanel = observer(() => {
  if (!appState$.statsPanelOpen.get()) return null

  return (
    <PanelOrOverlayContainer>
      <TSizableText size="$10" zi={1} textAlign="center">
        GAME STATS
      </TSizableText>

      <XStack w="100%" h={2} bg="$border" />

      <XStack zi={1} gap="$8" jc="flex-start" ai="flex-start">
        <YStack w="$12" gap="$6" ai="flex-start">
          <Score />
          <XStack w="100%" h={2} bg="$border" />
          <Efficiency />
        </YStack>
        <YStack w="$12" gap="$2" ai="flex-start">
          <ActiveTilesHistogram />
        </YStack>
      </XStack>

      <XStack w="100%" h={2} bg="$border" />

      <TButton zi={1} onPress={() => appState$.statsPanelOpen.set(false)}>
        Close
      </TButton>
    </PanelOrOverlayContainer>
  )
})
