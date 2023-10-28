import { observer } from '@legendapp/state/react'
import { TButton, TSizableText, XStack, YStack } from '@my/ui'
import { state$, actions$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { Score, Efficiency } from './stats'
import { stats$ } from 'app/statsState'
import { appState$ } from 'app/appState'
import { useUser } from 'app/utils/useUser'

const TopOutTitle = observer(
  ({ isHighScore, isLowScore }: { isHighScore: boolean; isLowScore: boolean }) => {
    if (isHighScore)
      return (
        <>
          NEW HIGH
          <br />
          SCORE
        </>
      )
    if (isLowScore)
      return (
        <>
          NEW LOW
          <br />
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
  return <TButton onPress={() => appState$.tab.set('user')}>SIGN UP TO JOIN LEADERBOARD</TButton>
})

export const TopOutPanel = observer(() => {
  if (!state$.toppedOut.get()) return null

  const isHighScore = state$.score.peek() === stats$.scoreHigh.peek()
  const isLowScore = !isHighScore && state$.score.peek() === stats$.scoreLow.peek()

  return (
    <YStack gap="$4" ai="center" jc="center" h={700}>
      <br />
      <YStack ai="center">
        <TSizableText size="$10" zi={1} textAlign="center">
          <TopOutTitle isHighScore={isHighScore} isLowScore={isLowScore} />
        </TSizableText>
        {isHighScore && <TopOutHighScoreSubtitle />}
        {isLowScore && <TopOutLowScoreSubtitle />}
      </YStack>

      <JoinLeaderboardButton />

      <XStack w="100%" h={2} bg="$border" />

      <TSizableText>Stats:</TSizableText>
      <XStack zi={1} gap="$8" jc="flex-start" ai="flex-start">
        <YStack w="$12" gap="$6" ai="flex-start">
          <Score />
          <XStack w="100%" h={2} bg="$border" />
          <Efficiency />
        </YStack>
        <YStack w="$12" gap="$2" ai="flex-start">
          <ActiveTilesHistogram noTargetEfficiency />
        </YStack>
      </XStack>

      <XStack w="100%" h={2} bg="$border" />

      <TButton zi={1} br="$0" onPress={actions$.reset}>
        New Game
      </TButton>
    </YStack>
  )
})
