import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { Tile } from './tile'
import { TSizableText, YStack, useMedia } from '@my/ui'

export const Queue = observer(() => {
  const { md } = useMedia()

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
        $md={{ fd: 'row', h: '$10', pr: '$2' }}
      >
        <YStack
          $gtMd={{ w: '$12', h: '$12' }}
          $md={{ w: '$10', h: '$10' }}
          bw={4}
          boc="$border"
          ai="center"
          jc="center"
        >
          <Tile size={state$.queue[0]} fixedSize={md ? '4' : undefined} />
        </YStack>
        {[1, 2, 3].map((index) => {
          return (
            <YStack key={index} w={md ? 68 : 105} h={105} ai="center" jc="center">
              <Tile size={state$.queue[index]} fixedSize={md ? '4' : undefined} />
            </YStack>
          )
        })}
      </YStack>
    </YStack>
  )
})
