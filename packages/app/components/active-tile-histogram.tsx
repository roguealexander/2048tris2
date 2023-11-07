import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { TileList } from '../types'
import { getTileColor } from '../tiles'
import { TSizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'

export const ActiveTilesHistogram = observer(
  ({ noTargetEfficiency }: { noTargetEfficiency?: boolean }) => {
    const maxTilesCountRaw = state$.maxTilesCount.get()
    const maxTilesCount = Math.max(1, maxTilesCountRaw)
    const activeTileCount = state$.activeTileCount.get()
    const targetEfficiency = state$.targetEfficiency.get()
    const scale = appState$.scale.get()
    return (
      <>
        <TSizableText>Histogram:</TSizableText>
        <YStack w="100%" ai="center" jc="flex-start">
          {TileList.map((size) => {
            return (
              <XStack
                key={size}
                w="100%"
                h={23 * scale}
                pos="relative"
                ai="center"
                jc="flex-start"
                outlineStyle="solid"
                outlineWidth={size === targetEfficiency && !noTargetEfficiency ? 2 : 0}
                zi={size === targetEfficiency && !noTargetEfficiency ? 2 : 1}
                outlineColor="$border"
                outlineOffset={2}
              >
                <XStack
                  pos="absolute"
                  r={0}
                  t={0}
                  h={23 * scale}
                  bg={getTileColor(size)}
                  o={activeTileCount[size] > 0 ? 1 : 0.5}
                  style={{
                    width: `${Math.max(5, (70 * activeTileCount[size]) / maxTilesCount)}%`,
                  }}
                />
                <TSizableText>{size}</TSizableText>
              </XStack>
            )
          })}
        </YStack>
      </>
    )
  }
)
