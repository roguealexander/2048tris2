import { Memo, observer } from '@legendapp/state/react'
import { stats$, state$ } from '../state'
import { SizableText, YStack } from '@my/ui'

export const Score = observer(() => {
  return (
    <YStack gap="$2" w="100%">
      <SizableText>
        Score:
        <br />
        <b>
          <Memo>{state$.score}</Memo>
        </b>
      </SizableText>
      <SizableText>
        Record:
        <br />
        <b>
          <Memo>{stats$.scoreHigh}</Memo>
        </b>
      </SizableText>
    </YStack>
  )
})
export const Efficiency = observer(() => {
  return (
    <YStack gap="$2" w="100%">
      <SizableText>
        Efficiency:
        <br />
        <b>
          <Memo>{state$.efficiency}</Memo>%
        </b>
      </SizableText>
      <SizableText>
        Record:
        <br />
        <b>
          <Memo>{state$.targetHighEfficiency}</Memo>% (<Memo>{state$.targetEfficiency}</Memo>)
        </b>
      </SizableText>
    </YStack>
  )
})
