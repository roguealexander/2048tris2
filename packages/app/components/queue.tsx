import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { Tile } from './tile'
import { TSizableText, YStack, useMedia } from '@my/ui'

export const Queue = observer(() => {
  const { md } = useMedia()
  const scale = md ? 0.6 : 1
  return (
    <YStack>
      <TSizableText>Next:</TSizableText>
      <YStack
        pos="relative"
        gap="$2"
        jc="center"
        ai="center"
        bg="$playarea"
        $gtMd={{ w: '$12', pb: '$2' }}
        $md={{ fd: 'row', h: '$9', pr: '$2' }}
      >
        <YStack
          $gtMd={{ w: '$12', h: '$12' }}
          $md={{ w: '$9', h: '$9' }}
          bw={4}
          boc="$border"
          ai="center"
          jc="center"
        >
          <Tile size={state$.queue[0]} stackProps={{ scale }} />
        </YStack>
        {[1, 2, 3].map((index) => {
          return (
            <YStack key={index} w={105 * scale} h={105 * scale} ai="center" jc="center">
              <Tile size={state$.queue[index]} stackProps={{ scale }} />
            </YStack>
          )
        })}
      </YStack>
    </YStack>
  )
})
