import { XStack, TSizableText, StackProps, useMedia } from '@my/ui'
import { getTileData, getTileRadius } from '../tiles'
import { TileSize } from '../types'
import { Observable, ObservableComputed } from '@legendapp/state'
import { observer } from '@legendapp/state/react'

export const PlaceholderTile = ({ fixedSize }: { fixedSize?: TileSize }) => {
  const fixedRadius = fixedSize ? getTileRadius(fixedSize) : undefined
  return <XStack w={fixedRadius ?? 60} h={fixedRadius ?? 60} bg="$border" o={0.5} br={60} />
}

export const Tile = observer(
  ({
    size,
    fixedSize,
    stackProps,
  }: {
    size?: Observable<TileSize | null> | ObservableComputed<TileSize | null>
    fixedSize?: TileSize
    stackProps?: StackProps
  }) => {
    const tileSize = size?.get()
    if (tileSize == null) return <PlaceholderTile fixedSize={fixedSize} />

    const tileData = getTileData(tileSize)!
    const tileRadius = getTileRadius(fixedSize || tileSize)

    return (
      <XStack
        w={tileRadius}
        h={tileRadius}
        br={tileRadius}
        bg={tileData.color}
        jc="center"
        ai="center"
        pe="none"
        {...stackProps}
      >
        <TSizableText size="$7" color={tileData.textColor}>
          {tileData.size}
        </TSizableText>
      </XStack>
    )
  }
)
