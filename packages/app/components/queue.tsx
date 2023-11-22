import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { Tile } from './tile'
import { TSizableText, YStack } from '@my/ui'
import { appState$ } from 'app/appState'

const horizontalScale = 144
const verticalScale = 104

export const Queue = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal
  const scale = appState$.scale.get()

  return (
    <YStack>
      <TSizableText>Queue:</TSizableText>
      <YStack
        pos="relative"
        gap={8 * scale}
        jc="center"
        ai="center"
        bg="$playarea"
        {...(horizontal
          ? {
              w: horizontalScale * scale,
              pb: 8 * scale,
            }
          : {
              fd: 'row',
              h: verticalScale * scale,
              pr: 8 * scale,
            })}
      >
        <YStack
          w={(horizontal ? horizontalScale : verticalScale) * scale}
          h={(horizontal ? horizontalScale : verticalScale) * scale}
          ai="center"
          jc="center"
        >
          <Tile size={state$.queue[0]} fixedSize={vertical ? '8' : undefined} />
        </YStack>
        {[1, 2, 3].map((index) => {
          return (
            <YStack
              key={index}
              w={(vertical ? 65 : 105) * scale}
              h={105 * scale}
              ai="center"
              jc="center"
            >
              <Tile size={state$.queue[index]} fixedSize={vertical ? '4' : undefined} />
            </YStack>
          )
        })}
      </YStack>
    </YStack>
  )
})
