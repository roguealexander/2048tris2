import { observer } from '@legendapp/state/react'
import { Button, TButton, TSizableText, XStack, YStack } from '@my/ui'
import { state$, actions$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { useUser } from 'app/utils/useUser'
import { appState$ } from 'app/appState'
import { PanelOrOverlayContainer } from './panel-or-overlay-container'

const JoinLeaderboardButton = observer(() => {
  const { user } = useUser()
  if (user != null) return
  return <TButton onPress={() => appState$.tab.set('user')}>SIGN UP TO JOIN LEADERBOARD</TButton>
})

export const HighEfficiencyPanel = observer(() => {
  const activeHighEfficiencyPanel = state$.activeHighEfficiencyPanel.get()
  const activeHighEfficiencyValue = state$.activeHighEfficiencyValue.get()

  if (activeHighEfficiencyPanel == null) return null

  return (
    <PanelOrOverlayContainer>
      <YStack ai="center">
        <TSizableText size="$9" zi={1} textAlign="center">
          NEW
          <br />
          EFFICIENCY
          <br />
          RECORD
        </TSizableText>
        <br />
        <TSizableText size="$8" fontStyle="italic">
          Size: {activeHighEfficiencyPanel}
        </TSizableText>
        <TSizableText size="$8" fontStyle="italic">
          Efficiency: {activeHighEfficiencyValue}%
        </TSizableText>
      </YStack>

      <JoinLeaderboardButton />

      <XStack w="100%" h={2} bg="$border" />

      <YStack w="$12" gap="$2" ai="flex-start">
        <ActiveTilesHistogram />
      </YStack>

      <XStack w="100%" h={2} bg="$border" />

      <TButton zi={1} onPress={() => actions$.closeActiveHighEfficiencyPanel()}>
        Continue Game
      </TButton>
    </PanelOrOverlayContainer>
  )
})
