import { TSizableText } from '@my/ui'
import { getTileData, getTileRadius } from 'app/tiles'
import { TileSize } from 'app/types'
import { Body } from 'matter-js'
import Animated from 'react-native-reanimated'

export const GameTile = ({ body, size }: { body: Body; size: TileSize }) => {
  const tileData = getTileData(size)!
  const tileRadius = getTileRadius(size)

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: body.position.x - tileRadius / 2,
        top: body.position.y - tileRadius / 2,
        width: tileRadius,
        height: tileRadius,
        borderRadius: tileRadius,
        transform: [{ rotate: body.angle + 'rad' }],
        backgroundColor: tileData.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <TSizableText pt={2} size="$7" color={tileData.textColor} selectable={false}>
        {size}
      </TSizableText>
    </Animated.View>
  )
}
