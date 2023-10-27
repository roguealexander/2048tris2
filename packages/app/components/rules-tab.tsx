import { observer } from '@legendapp/state/react'
import { ScrollView, TSizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import { TileSize } from 'app/types'
import { Tile } from './tile'
import { computed, observable } from '@legendapp/state'
import { ReactNode } from 'react'
import { getMergedTileSize, getTileRadius } from 'app/tiles'
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'
import { getQueueTile } from 'app/state'
import { BaseHoldListener } from './hold-listener'
import { ArrowLeftRight, Merge } from '@tamagui/lucide-icons'
import { TabContainer } from './tab-container'

// Rule drop state
const mouseX = observable<number>(0)
const activeTile = observable<TileSize>('4')
const mergedTile = computed(() => getMergedTileSize(activeTile.get()))
const releasedTile = observable<TileSize>('4')

const dropX = computed((): number => {
  return Math.min(
    450 - 4 - getTileRadius(activeTile.get()) / 2,
    Math.max(getTileRadius(activeTile.get()) / 2 + 4, mouseX.get())
  )
})

const TileDropPositioner = observer(({ children }: { children: ReactNode }) => {
  const left = dropX.get()
  return (
    <XStack pos="absolute" pe="none" l={left} t={64} x="-50%" y="-50%">
      {children}
    </XStack>
  )
})

const RulesDropExample = observer(() => {
  const dropProgress = useSharedValue(1)
  const releaseX = useSharedValue(0)

  const releaseBall = () => {
    // Handle release
    releasedTile.set(activeTile.peek())
    releaseX.value = dropX.peek()
    dropProgress.value = 0
    dropProgress.value = withTiming(1)

    // Get next tile
    activeTile.set(getQueueTile())
  }

  const moveBall = (event: any) => {
    mouseX.set(Math.min(450, Math.max(1, event.nativeEvent.offsetX)))
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: 64 + dropProgress.value * 100,
      left: releaseX.value,
      opacity: Math.min(1, 4 - dropProgress.value * 4),
    }
  }, [dropProgress, releaseX])

  return (
    <YStack onPress={releaseBall} onPointerMove={moveBall} w={450} h={128}>
      <Animated.View
        style={[{ position: 'absolute', zIndex: 2, pointerEvents: 'none' }, animatedStyle]}
      >
        <XStack x="-50%" y="-50%">
          <Tile size={releasedTile} />
        </XStack>
      </Animated.View>
      <XStack w="100%" h="50%" mt="auto" bg="$playarea" blw={4} brw={4} boc="$border" />
      <TileDropPositioner>
        <Tile size={activeTile} />
      </TileDropPositioner>
    </YStack>
  )
})

// Hold state
const heldTile = observable<TileSize>('16')
const holdPressed = observable(false)

const RulesHoldExample = observer(() => {
  const onHoldDown = () => {
    holdPressed.set(true)
  }
  const onHold = () => {
    holdPressed.set(false)
    const active = activeTile.peek()
    const held = heldTile.peek()
    activeTile.set(held)
    heldTile.set(active)
  }

  return (
    <XStack ai="center" jc="space-between" gap="$6" pt="$4" w="100%">
      <BaseHoldListener onHold={onHold} onHoldDown={onHoldDown} />
      <XStack w="$12" h="$12" jc="center" ai="center" bg="$playarea" bw={4} boc="$border">
        <Tile size={heldTile} />
      </XStack>
      <YStack ai="center" jc="center" gap="$4">
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
          <TSizableText zi={2}>Space</TSizableText>
        </XStack>
        <ArrowLeftRight color="$text" />
      </YStack>
      <XStack w={125} h={125} ai="center" jc="center">
        <Tile size={activeTile} />
      </XStack>
    </XStack>
  )
})

const RulesCombineExample = () => {
  return (
    <XStack ai="center" gap="$8" w="100%" jc="space-between">
      <YStack h={250} w={125} gap="$2" jc="space-around" ai="center">
        <Tile size={activeTile} />
        <Tile size={activeTile} />
      </YStack>
      <XStack rotate="90deg">
        <Merge />
      </XStack>
      <YStack w={125} h={125} ai="center" jc="center">
        <Tile size={mergedTile} />
      </YStack>
    </XStack>
  )
}

export const RulesTab = observer(() => {
  return (
    <TabContainer tab="rules">
      <TSizableText size="$5">HOW TO PLAY:</TSizableText>
      <br />
      <TSizableText>
        <b>Hover</b> to position, <b>Click</b> to drop
      </TSizableText>
      <RulesDropExample />
      <br />
      <br />
      <TSizableText>
        <b>Space</b> to put a tile in the hold
      </TSizableText>
      <RulesHoldExample />
      <br />
      <br />
      <TSizableText>Combine tiles</TSizableText>
      <RulesCombineExample />
    </TabContainer>
  )
})
