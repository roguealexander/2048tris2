import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { TileList } from '../types'
import { getTileColor } from '../tiles'
import { SizableText, XStack, YStack } from '@my/ui'

export const ActiveTilesHistogram = observer(() => {
  const maxTilesCountRaw = state$.maxTilesCount.get()
  const maxTilesCount = Math.max(1, maxTilesCountRaw)
  const activeTileCount = state$.activeTileCount.get()
  return (
    <>
      <SizableText>Histogram:</SizableText>
      <YStack w="100%" ai="center" jc="flex-start">
        {TileList.map((size) => {
          return (
            <XStack key={size} w="100%" h="$2" pos="relative" ai="center" jc="flex-start">
              <XStack
                pos="absolute"
                r={0}
                t={0}
                h="$2"
                bg={getTileColor(size)}
                o={activeTileCount[size] > 0 ? 1 : 0.5}
                style={{
                  width: `${Math.max(5, (70 * activeTileCount[size]) / maxTilesCount)}%`,
                }}
              />
              <SizableText>{size}</SizableText>
            </XStack>
          )
        })}
      </YStack>
    </>
  )
})
