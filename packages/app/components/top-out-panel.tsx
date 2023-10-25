import { observer } from '@legendapp/state/react'
import { Button, PortalHost, SizableText, XStack, YStack } from '@my/ui'
import { state$, actions$, highScores$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { Score, Efficiency } from './stats'

const TopOutTitle = observer(() => {
  if (state$.points.peek() === highScores$.points.peek()) return 'HIGH SCORE'
  return 'GAME OVER'
})

const TopOutHighScoreSubtitle = observer(() => {
  if (state$.points.peek() !== highScores$.points.peek()) return null
  return (
    <SizableText size="$9" fontStyle="italic">
      {highScores$.points.peek()} POINTS
    </SizableText>
  )
})

export const TopOutPanel = observer(() => {
  if (!state$.toppedOut.get()) return null
  return (
    <YStack gap="$4" ai="center" jc="center" pt="$12" h='100%' mr="$12">
      <YStack ai="center">
        <SizableText size="$10" zi={1}>
          <TopOutTitle />
        </SizableText>
        <TopOutHighScoreSubtitle />
      </YStack>

      <XStack w="100%" h={2} bg="$border" />

      <SizableText>Stats:</SizableText>
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

      <Button zi={1} br="$0" onPress={() => actions$.reset()}>
        New Game
      </Button>
    </YStack>
  )
})
