import { Memo, observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { TSizableText, YStack } from '@my/ui'
import { stats$ } from 'app/statsState'
import { appState$ } from 'app/appState'
import { colors } from 'app/colors'

const HighScoreValue = observer(() => {
  const score = stats$.scoreHigh.get()
  return score == null ? '-' : score
})

const getGameDurationDisplay = (duration: number) => {
  let inSecs = Math.round(duration / 1000)
  const minutes = Math.floor(inSecs / 60) % 60
  inSecs -= minutes * 60
  const seconds = inSecs
  return `${minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`
}

const GameTimeValue = observer(() => {
  return getGameDurationDisplay(state$.gameDuration.get())
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
  const efficiency = state$.targetHighEfficiency.get()
  return efficiency == null ? '-' : `${efficiency}%`
})

export const Milestone = observer(() => {
  const scale = appState$.scale.get()
  return (
    <YStack gap={8 * scale} w="100%" ai="center">
      <TSizableText size="$2">
        High Score:
        {'\n'}
        <TSizableText fontWeight="bold">
          <HighScoreValue />
        </TSizableText>
      </TSizableText>
      <YStack bg={colors.tile['2048']} w="100%" ai="center" jc="center" px={2} py={4}>
        <TSizableText size="$2" mb={4}>
          <TSizableText fontWeight="bold" color="$background">
            <Memo>{state$.targetEfficiency}</Memo>
          </TSizableText>
        </TSizableText>
        <TSizableText size="$2" color="$background">
          Best Eff:{' '}
          <TSizableText fontWeight="bold" color="$background">
            <HighEfficiencyValue />
          </TSizableText>
        </TSizableText>
        <TSizableText size="$2" color="$background">
          Best Time:{' '}
          <TSizableText fontWeight="bold" color="$background">
            <HighEfficiencyValue />
          </TSizableText>
        </TSizableText>
      </YStack>
    </YStack>
  )
})
