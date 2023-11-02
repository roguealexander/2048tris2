import { Memo, observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { TSizableText, YStack } from '@my/ui'
import { stats$ } from 'app/statsState'

const HighScoreValue = observer(() => {
  const score = stats$.scoreHigh.get()
  return score == null ? '-' : score
})
export const Score = observer(() => {
  return (
    <YStack gap="$2" w="100%">
      <TSizableText>
        Score:
        {'\n'}
        <TSizableText fontWeight="bold">
          <Memo>{state$.score}</Memo>
        </TSizableText>
      </TSizableText>
      <TSizableText>
        Record:
        {'\n'}
        <TSizableText fontWeight="bold">
          <HighScoreValue />
        </TSizableText>
      </TSizableText>
    </YStack>
  )
})

const HighEfficiencyValue = observer(() => {
  const efficiency = state$.targetHighEfficiency.get()
  return efficiency == null ? '-' : `${efficiency}%`
})

export const Efficiency = observer(() => {
  return (
    <YStack gap="$2" w="100%">
      <TSizableText>
        Efficiency:
        {'\n'}
        <TSizableText fontWeight="bold">
          <Memo>{state$.efficiency}</Memo>%
        </TSizableText>
      </TSizableText>
      <TSizableText>
        Record:
        {'\n'}
        <TSizableText fontWeight="bold">
          <HighEfficiencyValue /> (<Memo>{state$.targetEfficiency}</Memo>)
        </TSizableText>
      </TSizableText>
    </YStack>
  )
})
