import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { Tile } from './tile'
import { TSizableText, YStack } from '@my/ui'
import { appState$ } from 'app/appState'

export const Queue = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal

  return (
    <YStack>
      <TSizableText>Next:</TSizableText>
      <YStack
        pos="relative"
        gap="$2"
        jc="center"
        ai="center"
        bg="$playarea"
        {...(horizontal
          ? {
              w: '$12',
              pb: '$2',
            }
          : {
              fd: 'row',
              h: '$10',
              pr: '$2',
            })}
      >
        <YStack
          w={horizontal ? '$12' : '$10'}
          h={horizontal ? '$12' : '$10'}
          bw={4}
          boc="$border"
          ai="center"
          jc="center"
        >
          <Tile size={state$.queue[0]} fixedSize={vertical ? '4' : undefined} />
        </YStack>
        {[1, 2, 3].map((index) => {
          return (
            <YStack key={index} w={vertical ? 68 : 105} h={105} ai="center" jc="center">
              <Tile size={state$.queue[index]} fixedSize={vertical ? '4' : undefined} />
            </YStack>
          )
        })}
      </YStack>
    </YStack>
  )
})
