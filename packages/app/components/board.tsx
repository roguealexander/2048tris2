import { For, observer, useObserveEffect } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { ReactNode, useContext } from 'react'
import { getTilePower, getTileRadius } from '../tiles'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { XStack, YStack, useIsTouchDevice } from '@my/ui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  SharedValue,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated'
import { appActions$, appState$ } from 'app/appState'
import React from 'react'
import PhysicsWorld, { b2dTiles$, b2dTilesToCreate, worldContext } from './b2d/PhysicsWorld'
import { GameTile } from './GameTile'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const GameScale = 1
const width = 450
const height = 675

const TileDropPositioner = observer(
  ({ dropX, children }: { dropX: SharedValue<number>; children: ReactNode }) => {
    const scale = appState$.scale.get()
    const animatedStyle = useAnimatedStyle(() => {
      return {
        left: (dropX.value - 64) * scale,
      }
    }, [dropX, scale])
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            pointerEvents: 'none',
            top: -64 * scale,
            width: 128 * scale,
            height: 128 * scale,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle,
        ]}
      >
        {state$.gamePhysicsPaused.get() ? null : children}
      </Animated.View>
    )
  }
)

const TilePositionDetector = observer(
  ({ mouseX, release }: { mouseX: SharedValue<number>; release: () => void }) => {
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

    return (
      <GestureDetector gesture={gesture}>
        <XStack fullscreen />
      </GestureDetector>
    )
  }
)

const WorldResetter = observer(() => {
  const world = useContext(worldContext)

  useObserveEffect(
    () => state$.resetCount.get(),
    async ({ value }) => {
      if (value === 0 || world == null) return

      for (let b = world.m_bodyList; b; b = b.m_next) {
        const userData = b.GetUserData()
        if (userData && userData.category === '_TILE_') {
          const power = getTilePower(userData['size'])
          if (power >= 4) {
            appActions$.triggerPopSound(userData['size'], userData['id'])
          }
          b.m_userData.removed = true
          await sleep(25)
        }
      }

      state$.resetting.set(false)
    }
  )

  return null
})

const GameBox2D = () => {
  return (
    <PhysicsWorld>
      <WorldResetter />
      <For each={b2dTiles$} optimized>
        {(tile$) => {
          const tile = tile$.peek()
          if (tile == null) return <></>
          return <GameTile tile={tile} />
        }}
      </For>
    </PhysicsWorld>
  )
}

export const BoardComp = observer(() => {
  const scale = appState$.scale.get()
  const isTouchDevice = useIsTouchDevice()

  const mouseX = useSharedValue(0)
  const activeTile = state$.activeTile.get()
  const dropX = useDerivedValue(() => {
    const radius = getTileRadius(activeTile)
    return Math.min(Math.max(radius / 2, mouseX.value), (width - 8) * GameScale - radius / 2)
  }, [mouseX, activeTile])

  const releaseBall = () => {
    if (state$.gameInteractionPaused.get()) return

    b2dTilesToCreate['fresh'] = {
      size: state$.activeTile.peek(),
      position: { x: dropX.value, y: 0 },
      velocity: { x: 0.01, y: 0 },
      viaMerge: false,
    }

    actions$.drop()
  }

  return (
    <YStack
      bg="$playarea"
      bw={4 * scale}
      btw={0}
      boc="$border"
      w={width * scale}
      h={height * scale}
    >
      <GameBox2D />

      <TileDropPositioner dropX={dropX}>
        <Tile size={state$.activeTile} />
      </TileDropPositioner>

      <TilePositionDetector mouseX={mouseX} release={releaseBall} />

      {appState$.layoutDimension.get() === 'horizontal' && !isTouchDevice && (
        <>
          <YStack pos="absolute" l={-64 * scale} w={64 * scale} t={0} b={0} onPress={releaseBall} />
          <YStack pos="absolute" r={-64 * scale} w={64 * scale} t={0} b={0} onPress={releaseBall} />
        </>
      )}
    </YStack>
  )
})

export const Board = observer(() => {
  return (
    <YStack h={height * appState$.scale.get()} ai="flex-start" mt={24}>
      <BoardComp />
    </YStack>
  )
})
