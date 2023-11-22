import { Memo, observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { TSizableText, YStack } from '@my/ui'
import { DefaultBestTime, stats$ } from 'app/statsState'
import { appState$ } from 'app/appState'
import { colors } from 'app/colors'
import { getMinutesAndSeconds } from 'app/utils/time'

const HighScoreValue = observer(() => {
  const score = stats$.scoreHigh.get()
  return score == null ? '-' : score
})

const GameTimeValue = observer(() => {
  return getMinutesAndSeconds(state$.gameDuration.get())
})

export const Score = observer(() => {
  const scale = appState$.scale.get()

  return (
    <YStack gap={8 * scale} w="100%">
      <TSizableText size="$2">
        Score:{' '}
        <TSizableText fontWeight="bold">
          <Memo>{state$.score}</Memo>
        </TSizableText>
      </TSizableText>
      <TSizableText size="$2">
        Eff.:{' '}
        <TSizableText fontWeight="bold">
          <Memo>{state$.efficiency}</Memo>%
        </TSizableText>
      </TSizableText>
      <TSizableText size="$2">
        Time:{' '}
        <TSizableText fontWeight="bold">
          <GameTimeValue />
        </TSizableText>
      </TSizableText>
    </YStack>
  )
})

const HighEfficiencyValue = observer(() => {
  const efficiency = state$.targetMilestoneEfficiency.get()
  return efficiency == null || efficiency === 0 ? '-' : `${efficiency}%`
})
const BestTimeValue = observer(() => {
  const bestTime = state$.targetMilestoneBestTime.get()
  return bestTime == null || bestTime === DefaultBestTime
    ? '-'
    : `${getMinutesAndSeconds(bestTime)}`
})

export const Milestone = observer(() => {
  const scale = appState$.scale.get()
  return (
    <YStack gap={8 * scale} w="100%" ai="center">
      <TSizableText size="$2">
        Record:{' '}
        <TSizableText fontWeight="bold">
          <HighScoreValue />
        </TSizableText>
      </TSizableText>
      <YStack bg={colors.tile['2048']} w="100%" ai="center" jc="center" px={2} py={4}>
        <TSizableText size="$2" mb={4} color="$background">
          <TSizableText fontWeight="bold" color="$background">
            <Memo>{state$.targetMilestone}</Memo>
          </TSizableText>{' '}
          RECORDS:
        </TSizableText>
        <TSizableText size="$2" color="$background">
          Eff.:{' '}
          <TSizableText fontWeight="bold" color="$background">
            <HighEfficiencyValue />
          </TSizableText>
        </TSizableText>
        <TSizableText size="$2" color="$background">
          Time:{' '}
          <TSizableText fontWeight="bold" color="$background">
            <BestTimeValue />
          </TSizableText>
        </TSizableText>
      </YStack>
    </YStack>
  )
})
