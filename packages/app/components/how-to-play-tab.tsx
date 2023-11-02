import { observer } from '@legendapp/state/react'
import { Spacer, TSizableText, XStack, YStack, useIsTouchDevice } from '@my/ui'
import { TileSize } from 'app/types'
import { Tile } from './tile'
import { computed, observable } from '@legendapp/state'
import { ReactNode } from 'react'
import { getMergedTileSize, getTileRadius } from 'app/tiles'
import Animated, {
  useSharedValue,
  useDerivedValue,
  withTiming,
  useAnimatedStyle,
  SharedValue,
  runOnJS,
} from 'react-native-reanimated'
import { getQueueTile } from 'app/state'
import { BaseHoldListener } from './hold-listener'
import { ArrowDownLeft, ArrowLeftRight, Merge } from '@tamagui/lucide-icons'
import { TabContainer } from './tab-container'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { appState$ } from 'app/appState'

// Rule drop state
const activeTile$ = observable<TileSize>('4')
const mergedTile$ = computed(() => getMergedTileSize(activeTile$.get()))
const releasedTile$ = observable<TileSize>('4')

const TileDropPositioner = observer(
  ({ dropX, children }: { dropX: SharedValue<number>; children: ReactNode }) => {
    const animatedStyle = useAnimatedStyle(() => {
      return {
        left: dropX.value - 64,
      }
    }, [dropX])
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            pointerEvents: 'none',
            top: 0,
            width: 128,
            height: 128,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle,
        ]}
      >
        {children}
      </Animated.View>
    )
  }
)

const TilePositionDetector = ({
  mouseX,
  release,
  children,
}: {
  mouseX: SharedValue<number>
  release: () => void
  children: ReactNode
}) => {
  const isTouchDevice = useIsTouchDevice()
  const scale = appState$.scale.get()

  const hoverGesture = Gesture.Hover()
    .onBegin((event) => {
      if (isTouchDevice) return
      mouseX.value = event.x / scale
    })
    .onChange((event) => {
      if (isTouchDevice) return
      mouseX.value = event.x / scale
    })
  const panGesture = Gesture.Pan()
    .onBegin((event) => {
      if (!isTouchDevice) return
      mouseX.value = event.x / scale
    })
    .onChange((event) => {
      if (!isTouchDevice) return
      mouseX.value = event.x / scale
    })
    .onFinalize(() => {
      runOnJS(release)()
    })
  const gesture = Gesture.Simultaneous(hoverGesture, panGesture)

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>
}

const DropExample = observer(() => {
  const isTouchDevice = useIsTouchDevice()
  const dropProgress = useSharedValue(1)
  const releaseX = useSharedValue(0)

  const mouseX = useSharedValue(0)
  const activeTile = activeTile$.get()
  const dropX = useDerivedValue(() => {
    const radius = getTileRadius(activeTile)
    return Math.min(Math.max(4 + radius / 2, mouseX.value), 450 - 4 - radius / 2)
  }, [mouseX, activeTile])

  const releaseBall = () => {
    // Handle release
    releasedTile$.set(activeTile$.peek())
    releaseX.value = dropX.value
    dropProgress.value = 0
    dropProgress.value = withTiming(1)

    // Get next tile
    activeTile$.set(getQueueTile())
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: dropProgress.value * 100,
      left: releaseX.value - 64,
      opacity: Math.min(1, 4 - dropProgress.value * 4),
    }
  }, [dropProgress, releaseX])

  return (
    <>
      <TSizableText>
        {isTouchDevice ? (
          <>
            <TSizableText fontWeight="bold">Press</TSizableText> and{' '}
            <TSizableText fontWeight="bold">Drag</TSizableText> to position,{' '}
            <TSizableText fontWeight="bold">Release</TSizableText> to drop.
            {'\n'}- or -{'\n'}
            <TSizableText fontWeight="bold">Tap</TSizableText> to both position and drop.
          </>
        ) : (
          <>
            <TSizableText fontWeight="bold">Hover</TSizableText> to position,{' '}
            <TSizableText fontWeight="bold">Click</TSizableText> to drop
          </>
        )}
      </TSizableText>
      <TilePositionDetector mouseX={mouseX} release={releaseBall}>
        <YStack w={450} h={128}>
          <Animated.View
            style={[
              {
                width: 128,
                height: 128,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                zIndex: 2,
                pointerEvents: 'none',
              },
              animatedStyle,
            ]}
          >
            <Tile size={releasedTile$} />
          </Animated.View>
          <XStack w="100%" h="50%" mt="auto" bg="$playarea" blw={4} brw={4} boc="$border" />
          <TileDropPositioner dropX={dropX}>
            <Tile size={activeTile$} />
          </TileDropPositioner>
        </YStack>
      </TilePositionDetector>
    </>
  )
})

// Hold state
const heldTile = observable<TileSize>('16')
const holdPressed = observable(false)

const HoldExample = observer(() => {
  const isTouchDevice = useIsTouchDevice()

  const swapActiveAndHoldTile = () => {
    const active = activeTile$.peek()
    const held = heldTile.peek()
    activeTile$.set(held)
    heldTile.set(active)
  }

  const onHoldDown = () => {
    holdPressed.set(true)
  }
  const onHold = () => {
    holdPressed.set(false)
    swapActiveAndHoldTile()
  }

  return (
    <>
      <TSizableText>
        <TSizableText fontWeight="bold">Click</TSizableText> the hold area
        {!isTouchDevice && (
          <>
            {'\n'}- or -{'\n'}
            Press <TSizableText fontWeight="bold">Space</TSizableText>
          </>
        )}{' '}
        to put a tile in the hold
      </TSizableText>
      <XStack ai="center" jc="space-between" gap="$6" pt="$4" w="100%">
        <BaseHoldListener onHold={onHold} onHoldDown={onHoldDown} />
        <XStack
          w="$12"
          h="$12"
          jc="center"
          ai="center"
          bg="$playarea"
          bw={4}
          boc="$border"
          pos="relative"
          cur="pointer"
          onPress={swapActiveAndHoldTile}
        >
          <Tile size={heldTile} />
          <XStack pos="absolute" t={0} r={-90} py="$1" ai="center" jc="center" gap="$2" pe="none">
            <ArrowDownLeft size={24} color="$text" />
            <TSizableText size="$4" zi={2} pb={24}>
              CLICK
            </TSizableText>
          </XStack>
        </XStack>
        <YStack ai="center" jc="center" gap="$2">
          <ArrowLeftRight color="$text" />

          {!isTouchDevice && (
            <XStack
              py="$1"
              px="$6"
              bg="$background"
              bw={2}
              boc="$text"
              pos="relative"
              shadowRadius={0}
              shadowColor="$text"
              y={holdPressed.get() ? 4 : 0}
              shadowOffset={holdPressed.get() ? { width: 0, height: 0 } : { width: 4, height: 4 }}
            >
              <TSizableText zi={2}>SPACE</TSizableText>
            </XStack>
          )}
        </YStack>
        <XStack w={125} h={125} ai="center" jc="center">
          <Tile size={activeTile$} />
        </XStack>
      </XStack>
    </>
  )
})

const CombineExample = () => {
  return (
    <>
      <TSizableText>Combine tiles</TSizableText>
      <XStack ai="center" gap="$8" w="100%" jc="space-between">
        <YStack h={250} w={125} gap="$2" jc="space-around" ai="center">
          <Tile size={activeTile$} />
          <Tile size={activeTile$} />
        </YStack>
        <XStack rotate="90deg">
          <Merge />
        </XStack>
        <YStack w={125} h={125} ai="center" jc="center">
          <Tile size={mergedTile$} />
        </YStack>
      </XStack>
    </>
  )
}

export const HowToPlayTab = observer(() => {
  return (
    <TabContainer tab="how-to-play">
      <TSizableText size="$5">HOW TO PLAY:</TSizableText>
      <Spacer />
      <DropExample />
      <Spacer />
      <Spacer />
      <HoldExample />
      <Spacer />
      <Spacer />
      <CombineExample />
    </TabContainer>
  )
})
