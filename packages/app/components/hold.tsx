import { observer, useObserve } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { Shake, TSizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { colors } from 'app/colors'
import chroma from 'chroma-js'

const horizontalSize = 144
const verticalSize = 104

export const Hold = observer(() => {
  const scale = appState$.scale.get()
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const holdAvailable = state$.holdAvailable.get()

  const opacitySV = useSharedValue(0)

  useObserve(state$.holdShakeKey, ({ previous, value }) => {
    if (value != null && value !== previous) {
      opacitySV.value = 0.6
      opacitySV.value = withTiming(0, { duration: 400 })
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacitySV.value,
    }
  }, [opacitySV])

  return (
    <YStack>
      <TSizableText>Hold:</TSizableText>
      <XStack
        w={(horizontal ? horizontalSize : verticalSize) * scale}
        h={(horizontal ? horizontalSize : verticalSize) * scale}
        jc="center"
        ai="center"
        bg={
          holdAvailable ? '$playarea' : chroma(colors.playarea).desaturate(1).brighten(0.25).css()
        }
        cur="pointer"
        onPress={() => actions$.hold()}
      >
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: colors.tile['32'],
              zIndex: 2,
            },
            animatedStyle,
          ]}
        />
        <Shake shakeKey={state$.holdShakeKey.get()} shakeDistance={12} shakeTimes={5}>
          <Tile
            size={state$.heldTile}
            fixedSize={horizontal ? undefined : '8'}
            grayscale={!holdAvailable}
          />
        </Shake>
      </XStack>
    </YStack>
  )
})
