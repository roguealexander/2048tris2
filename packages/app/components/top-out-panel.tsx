import { observer } from '@legendapp/state/react'
import { Button, TSizableText, XStack, YStack } from '@my/ui'
import { state$, actions$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { Score, Efficiency } from './stats'
import { stats$ } from 'app/statsState'

const TopOutTitle = observer(() => {
  if (state$.score.peek() === stats$.scoreHigh.peek()) return 'HIGH SCORE'
  return 'GAME OVER'
})

const TopOutHighScoreSubtitle = observer(() => {
  if (state$.score.peek() !== stats$.scoreHigh.peek()) return null
  return (
    <TSizableText size="$9" fontStyle="italic">
      {stats$.scoreHigh.peek()} POINTS
    </TSizableText>
  )
})

export const TopOutPanel = observer(() => {
  if (!state$.toppedOut.get()) return null
  return (
    <YStack gap="$4" ai="center" jc="center" pt="$12" h="100%" mr="$12">
      <YStack ai="center">
        <TSizableText size="$10" zi={1}>
          <TopOutTitle />
        </TSizableText>
        <TopOutHighScoreSubtitle />
      </YStack>

      <XStack w="100%" h={2} bg="$border" />

      <TSizableText>Stats:</TSizableText>
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
