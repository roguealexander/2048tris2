import { getTileData, getTileRadius } from 'app/tiles'
import { TileSize } from 'app/types'
import { View } from 'react-native'
import { appState$ } from 'app/appState'
import { observer, useMount, useUnmount } from '@legendapp/state/react'
import { useRef } from 'react'
// import { b2dTileBodies, b2dTileRefs } from './b2d/PhysicsWorld'
import { fromPhysicsToCanvas } from './b2d/Utils'
import { TSizableText } from '@my/ui'
// import { rapierTileBodies, rapierTileRefs } from './rapier/RapierWorld'
import { kineticsTileBodies, kineticsTileDatas, kineticsTileRefs } from './kinetics/KineticsWorld'

export const GameTile = observer(
  ({ tile: { id, size } }: { tile: { id: number; size: TileSize } }) => {
    const ref = useRef<View>(null)
    const scale = appState$.scale.get()
    const tileData = getTileData(size)!
    const tileRadius = getTileRadius(size)

    // const b2dBody = b2dTileBodies[id]!
    // const position = b2dBody.GetPosition()
    // const angle = b2dBody.GetAngle()

    // const rapierBody = rapierTileBodies[id]!
    // const position = rapierBody.translation()
    // const angle = rapierBody.rotation()

    const kineticsEntity = kineticsTileBodies[id]!
    const position = kineticsEntity.position
    const angle = kineticsEntity.angle

    useMount(() => {
      // b2dTileRefs[id] = ref
      // rapierTileRefs[id] = ref
      kineticsTileRefs[id] = ref
    })
    useUnmount(() => {
      // delete b2dTileRefs[id]
      // delete b2dTileBodies[id]

      // delete rapierTileRefs[id]
      // delete rapierTileBodies[id]

      delete kineticsTileRefs[id]
      delete kineticsTileBodies[id]
      delete kineticsTileDatas[id]
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
            { translateX: (fromPhysicsToCanvas(position.x) - tileRadius / 2) * scale },
            {
              translateY: (fromPhysicsToCanvas(position.y) - tileRadius / 2) * scale,
            },
            { rotate: angle + 'rad' },
          ],
          backgroundColor: tileData.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <TSizableText color={tileData.textColor} selectable={false}>
          {size}
        </TSizableText>
      </View>
    )
  }
)
