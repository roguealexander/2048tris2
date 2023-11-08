import { TSizableText } from '@my/ui'
import { getTileData, getTileRadius } from 'app/tiles'
import { TileSize } from 'app/types'
import Animated from 'react-native-reanimated'
import { appState$ } from 'app/appState'
import { observer } from '@legendapp/state/react'
import { ObservableObject } from '@legendapp/state'
import { GameEngineEntity } from 'app/react-native-game-engine/rnge-types'
import { frame$ } from 'app/react-native-game-engine/GameEngine'

export const GameTile = observer(({ entity$ }: { entity$: ObservableObject<GameEngineEntity> }) => {
  frame$.get()
  const size = entity$.size.peek() as TileSize
  const scale = appState$.scale.peek()
  const tileData = getTileData(size)!
  const tileRadius = getTileRadius(size)

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: (entity$.body.position.x.peek() - tileRadius / 2) * scale,
        top: (entity$.body.position.y.peek() - tileRadius / 2 - 128) * scale,
        width: tileRadius * scale,
        height: tileRadius * scale,
        borderRadius: tileRadius * scale,
        transform: [{ rotate: entity$.body.angle.peek() + 'rad' }],
        backgroundColor: tileData.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <TSizableText pt={3} size="$7" color={tileData.textColor} selectable={false}>
        {size}
      </TSizableText>
    </Animated.View>
  )
})
