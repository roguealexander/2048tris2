import { Memo, observer } from '@legendapp/state/react'
import { stats$, state$ } from '../state'
import { TSizableText, YStack } from '@my/ui'

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
          <Memo>{stats$.scoreHigh}</Memo>
        </b>
      </TSizableText>
    </YStack>
  )
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
          <Memo>{state$.targetHighEfficiency}</Memo>% (<Memo>{state$.targetEfficiency}</Memo>)
        </b>
      </TSizableText>
    </YStack>
  )
})
