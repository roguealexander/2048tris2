import { observer } from '@legendapp/state/react'
import { Spacer, TButton, TSizableText, XStack, YStack } from '@my/ui'
import { state$, actions$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { useUser } from 'app/utils/useUser'
import { appState$ } from 'app/appState'
import { PanelOrOverlayContainer } from './panel-or-overlay-container'
import { batch } from '@legendapp/state'
import { getMinutesAndSeconds } from 'app/utils/time'

const JoinLeaderboardButton = observer(() => {
  const { user } = useUser()
  if (user != null) return
  return (
    <TButton
      onPress={() => {
        batch(() => {
          appState$.backTab.set('2048tris')
          appState$.tab.set('user')
        })
      }}
    >
      SIGN UP TO JOIN LEADERBOARD
    </TButton>
  )
})

export const MilestoneImprovementPanel = observer(() => {
  const activeMilestonePanel = state$.activeMilestonePanel.get()

  if (activeMilestonePanel == null) return null

  return (
    <PanelOrOverlayContainer>
      <YStack ai="center">
        <TSizableText size="$9" zi={1} textAlign="center">
          NEW{'\n'}
          {activeMilestonePanel.tile}
          {'\n'}RECORD
        </TSizableText>
        <Spacer />
        {activeMilestonePanel.efficiency != null && (
          <TSizableText size="$8" fontStyle="italic">
            Efficiency: {activeMilestonePanel.efficiency}%
          </TSizableText>
        )}
        {activeMilestonePanel.time != null && (
          <TSizableText size="$8" fontStyle="italic">
            Best Time: {getMinutesAndSeconds(activeMilestonePanel.time)}
          </TSizableText>
        )}
      </YStack>

      <JoinLeaderboardButton />

      <XStack w="100%" h={2} bg="$border" />

      <YStack w="$12" gap="$2" ai="flex-start">
        <ActiveTilesHistogram />
      </YStack>

      <XStack w="100%" h={2} bg="$border" />

      <TButton zi={1} onPress={() => actions$.closeMilestonePanel()}>
        Continue Game
      </TButton>
    </PanelOrOverlayContainer>
  )
})
