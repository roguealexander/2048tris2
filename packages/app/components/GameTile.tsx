import { getTileData, getTileRadius } from 'app/tiles'
import { TileSize } from 'app/types'
import { Text, View, Platform } from 'react-native'
import { appState$ } from 'app/appState'
import { observer, useMount, useUnmount } from '@legendapp/state/react'
import { ObservableObject } from '@legendapp/state'
import { GameEngineEntity } from 'app/react-native-game-engine/rnge-types'
import { frame$, tileBodies, tileRefs } from 'app/react-native-game-engine/GameEngine'
import { useRef } from 'react'

export const GameTile = observer(({ entity$ }: { entity$: ObservableObject<GameEngineEntity> }) => {
  if (Platform.OS === 'web') {
    frame$.get()
  }
  const ref = useRef<View>(null)
  const size = entity$.size.get() as TileSize
  const scale = appState$.scale.peek()
  const tileData = getTileData(size)!
  const tileRadius = getTileRadius(size)
  const id = entity$.id.peek()
  const body = tileBodies[id]!

  useMount(() => {
    tileRefs[id] = ref
  })
  useUnmount(() => {
    delete tileRefs[id]
    delete tileBodies[id]
  })

  return (
    <View
      ref={ref}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: tileRadius * scale,
        height: tileRadius * scale,
        borderRadius: tileRadius * scale,
        transform: [
          { translateX: (body.position.x - tileRadius / 2) * scale },
          { translateY: (body.position.y - tileRadius / 2 - 128) * scale },
          { rotate: body.angle + 'rad' },
        ],
        backgroundColor: tileData.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <Text style={{ color: tileData.textColor }} selectable={false}>
        {size}
      </Text>
    </View>
  )
})
