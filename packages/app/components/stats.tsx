import { Memo, observer } from '@legendapp/state/react'
import { stats$, state$ } from '../state'
import { TSizableText, YStack } from '@my/ui'

const HighScoreValue = observer(() => {
  const score = stats$.scoreHigh.get()
  return score == null ? '-' : score
})
export const Score = observer(() => {
  return (
    <YStack gap="$2" w="100%">
      <TSizableText>
        Score:
        <br />
        <b>
          <Memo>{state$.score}</Memo>
        </b>
      </TSizableText>
      <TSizableText>
        Record:
        <br />
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
        <br />
        <b>
          <Memo>{state$.efficiency}</Memo>%
        </b>
      </TSizableText>
      <TSizableText>
        Record:
        <br />
        <b>
          <HighEfficiencyValue /> (<Memo>{state$.targetEfficiency}</Memo>)
        </b>
      </TSizableText>
    </YStack>
  )
})
