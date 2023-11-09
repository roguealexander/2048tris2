import { XStack, TSizableText, StackProps } from '@my/ui'
import { getTileData, getTileRadius } from '../tiles'
import { TileSize } from '../types'
import { Observable, ObservableComputed } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { appState$ } from 'app/appState'

export const PlaceholderTile = ({ fixedSize, scale }: { fixedSize?: TileSize; scale: number }) => {
  const fixedRadius = fixedSize ? getTileRadius(fixedSize) : undefined
  return (
    <XStack
      w={(fixedRadius ?? 60) * scale}
      h={(fixedRadius ?? 60) * scale}
      bg="$border"
      o={0.5}
      br={60}
    />
  )
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
    const scale = appState$.scale.get()
    const tileSize = size?.get()
    if (tileSize == null) return <PlaceholderTile fixedSize={fixedSize} scale={scale} />

    const tileData = getTileData(tileSize)!
    const tileRadius = getTileRadius(fixedSize || tileSize) * scale

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
        <TSizableText color={tileData.textColor} selectable={false}>
          {tileData.size}
        </TSizableText>
      </XStack>
    )
  }
)
