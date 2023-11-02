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
        <b>
          <Memo>{state$.score}</Memo>
        </b>
      </TSizableText>
      <TSizableText>
        Record:
        {'\n'}
        <b>
          <HighScoreValue />
        </b>
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
        <b>
          <Memo>{state$.efficiency}</Memo>%
        </b>
      </TSizableText>
      <TSizableText>
        Record:
        {'\n'}
        <b>
          <HighEfficiencyValue /> (<Memo>{state$.targetEfficiency}</Memo>)
        </b>
      </TSizableText>
    </YStack>
  )
})
