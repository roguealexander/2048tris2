import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { Tile } from './tile'
import { SizableText, YStack } from '@my/ui'

export const Queue = observer(() => {
  return (
    <YStack gap="$2" ai="flex-start">
      <SizableText>Next:</SizableText>
      <YStack pos="relative" w="$12" gap="$2" pb="$2" jc="center" ai="center" bg="$playarea">
        <YStack w="$12" h="$12" bw={4} boc="$border" ai="center" jc="center">
          <Tile size={state$.queue[0]} />
        </YStack>
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <YStack key={index} w={105} h={105} ai="center" jc="center">
              <Tile size={state$.queue[index]} />
            </YStack>
          )
        })}
      </YStack>
    </YStack>
  )
})
