import { observer } from '@legendapp/state/react'
import { TButton, TSizableText, XStack, YStack } from '@my/ui'
import { state$, actions$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { Score, Milestone } from './stats'
import { stats$ } from 'app/statsState'
import { appState$ } from 'app/appState'
import { useUser } from 'app/utils/useUser'
import { PanelOrOverlayContainer } from './panel-or-overlay-container'
import { batch } from '@legendapp/state'
import { TextBreak } from './TextBreak'

const TopOutTitle = observer(
  ({ isHighScore, isLowScore }: { isHighScore: boolean; isLowScore: boolean }) => {
    if (isHighScore)
      return (
        <>
          NEW HIGH
          <TextBreak />
          SCORE
        </>
      )
    if (isLowScore)
      return (
        <>
          NEW LOW
          <TextBreak />
          SCORE
        </>
      )
    return 'GAME OVER'
  }
)

const TopOutHighScoreSubtitle = observer(() => {
  return (
    <TSizableText size="$9" fontStyle="italic">
      {stats$.scoreHigh.peek()} POINTS
    </TSizableText>
  )
})
const TopOutLowScoreSubtitle = observer(() => {
  return (
    <TSizableText size="$9" fontStyle="italic">
      {stats$.scoreLow.peek()} POINTS
    </TSizableText>
  )
})

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

export const TopOutPanel = observer(() => {
  if (!state$.toppedOut.get()) return null

  const isHighScore = state$.score.peek() === stats$.scoreHigh.peek()
  const isLowScore = !isHighScore && state$.score.peek() === stats$.scoreLow.peek()

  return (
    <PanelOrOverlayContainer>
      <YStack ai="center">
        <TSizableText size="$10" zi={1} textAlign="center">
          <TopOutTitle isHighScore={isHighScore} isLowScore={isLowScore} />
        </TSizableText>
        {isHighScore && <TopOutHighScoreSubtitle />}
        {isLowScore && <TopOutLowScoreSubtitle />}
      </YStack>

      <JoinLeaderboardButton />

      <XStack w="100%" h={2} bg="$border" />

      <TSizableText zi={1}>Stats:</TSizableText>
      <XStack zi={1} gap="$8" jc="flex-start" ai="flex-start">
        <YStack w="$12" gap="$6" ai="flex-start">
          <Score />
          <XStack w="100%" h={2} bg="$border" />
          <Milestone />
        </YStack>
        <YStack w="$12" gap="$2" ai="flex-start">
          <ActiveTilesHistogram noTargetEfficiency />
        </YStack>
      </XStack>

      <XStack w="100%" h={2} bg="$border" />

      <TButton zi={1} br="$0" onPress={actions$.reset}>
        New Game
      </TButton>
    </PanelOrOverlayContainer>
  )
})
