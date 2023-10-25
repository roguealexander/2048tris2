import { Memo, observer } from '@legendapp/state/react'
import { highScores$, state$ } from '../state'
import { SizableText, XStack, YStack } from '@my/ui'

export const Score = observer(() => {
  return (
    <YStack gap="$2" w="100%">
      <SizableText>
        Score:
        <br />
        <b>
          <Memo>{state$.points}</Memo>
        </b>
      </SizableText>
      <SizableText>
        High Score:
        <br />
        <b>
          <Memo>{highScores$.points}</Memo>
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
        High Efficiency:
        <br />
        <b>
          <Memo>{state$.targetHighEfficiency}</Memo>% (<Memo>{state$.targetEfficiency}</Memo>)
        </b>
      </SizableText>
    </YStack>
  )
})
