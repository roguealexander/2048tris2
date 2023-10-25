import { observer, useObserve } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { Engine, Render, World, Events, Bodies, Runner, Composite } from 'matter-js'
import { useRef, useEffect, ReactNode } from 'react'
import { getMergedTileSize, getTileRadius, getTileSizeFromRadius } from '../tiles'
import ball2 from '../assets/2.png'
import ball4 from '../assets/4.png'
import ball8 from '../assets/8.png'
import ball16 from '../assets/16.png'
import ball32 from '../assets/32.png'
import ball64 from '../assets/64.png'
import ball128 from '../assets/128.png'
import ball256 from '../assets/256.png'
import ball512 from '../assets/512.png'
import ball1024 from '../assets/1024.png'
import ball2048 from '../assets/2048.png'
import ball4096 from '../assets/4096.png'
import ball8192 from '../assets/8192.png'
import { TileRecord } from '../types'
import { batch } from '@legendapp/state'
import { Stats } from './stats'
import { ActiveTilesHistogram } from './active-tile-histogram'
import { Button, PortalHost, PortalItem, SizableText, Spacer, XStack, YStack } from '@my/ui'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const width = 450
const height = 700
let lastDroppedTileId = -1

const tileAsset: TileRecord<string> = {
  '2': ball2.src,
  '4': ball4.src,
  '8': ball8.src,
  '16': ball16.src,
  '32': ball32.src,
  '64': ball64.src,
  '128': ball128.src,
  '256': ball256.src,
  '512': ball512.src,
  '1024': ball1024.src,
  '2048': ball2048.src,
  '4096': ball4096.src,
  '8192': ball8192.src,
}

const handledCollision: Record<string, boolean> = {}
let tileId = 450

const TileDropPositioner = observer(({ children }: { children: ReactNode }) => {
  const dropX = state$.dropX.get()
  return (
    <XStack pos="absolute" pe="none" l={dropX} t={64} x="-50%" y="-50%">
      {state$.engineEnabled.get() && children}
    </XStack>
  )
})

export const BoardComp = observer(() => {
  const scene = useRef<HTMLDivElement | null>(null)
  const engine = useRef(
    Engine.create({
      gravity: { x: 0, y: 2 },
    })
  )
  const runner = useRef(Runner.create())

  runner.current.enabled = state$.engineEnabled.get()

  useObserve(
    () => state$.resetCount.get(),
    async () => {
      if (engine.current == null) return
      const bodies = Composite.allBodies(engine.current!.world)

      for (let i = bodies.length - 1; i >= 0; i--) {
        if (bodies[i]!.label === 'Circle Body') {
          Composite.remove(engine.current.world, bodies[i]!)
          await sleep(25)
        }
      }

      Composite.clear(engine.current!.world, false)

      const cw = (width + 64 * 2) * 2
      const ch = (height + 64 * 2) * 2

      World.add(engine.current.world, [
        // Top Sensor
        Bodies.rectangle(cw / 2, -20 + 64, cw, 40, {
          id: 100,
          isSensor: true,
          isStatic: true,
          render: { opacity: 0 },
        }),

        // Left Boundary
        Bodies.rectangle(-20 + 128, ch / 2, 40, ch, { isStatic: true, render: { opacity: 0 } }),
        // Bottom Boundary
        Bodies.rectangle(cw / 2, ch + 20 - 128, cw, 40, { isStatic: true, render: { opacity: 0 } }),
        // Right Boundary
        Bodies.rectangle(cw + 20 - 128, ch / 2, 40, ch, { isStatic: true, render: { opacity: 0 } }),
      ])

      state$.resetting.set(false)
    }
  )

  useEffect(() => {
    const cw = (width + 64 * 2) * 2
    const ch = (height + 64 * 2) * 2

    const render = Render.create({
      element: scene.current!,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent',
      },
    })

    World.add(engine.current.world, [
      // Top Sensor
      Bodies.rectangle(cw / 2, -20 + 64, cw, 40, {
        id: 100,
        isSensor: true,
        isStatic: true,
        render: { opacity: 0 },
      }),

      // Left Boundary
      Bodies.rectangle(-20 + 128, ch / 2, 40, ch, { isStatic: true, render: { opacity: 0 } }),
      // Bottom Boundary
      Bodies.rectangle(cw / 2, ch + 20 - 128, cw, 40, { isStatic: true, render: { opacity: 0 } }),
      // Right Boundary
      Bodies.rectangle(cw + 20 - 128, ch / 2, 40, ch, { isStatic: true, render: { opacity: 0 } }),
    ])

    Runner.start(runner.current, engine.current)
    Render.run(render)

    Events.on(engine.current, 'collisionActive', (event) => {
      const { pairs } = event

      pairs.forEach((pair) => {
        const { id, bodyA, bodyB } = pair

        if (
          (bodyA.id === 100 && bodyB.id !== lastDroppedTileId) ||
          (bodyB.id === 100 && bodyA.id !== lastDroppedTileId)
        ) {
          actions$.topOut()
        }

        if (handledCollision[id]) return
        handledCollision[id] = true

        const aRadius = bodyA.circleRadius
        const bRadius = bodyB.circleRadius

        if (aRadius === bRadius && aRadius != null) {
          World.remove(engine.current.world, bodyA)
          World.remove(engine.current.world, bodyB)

          const size = getTileSizeFromRadius(aRadius)
          const mergedSize = getMergedTileSize(size)
          const mergedRadius = getTileRadius(mergedSize)

          batch(() => {
            state$.activeTileCount[size].set((count) => count - 2)
            state$.activeTileCount[mergedSize].set((count) => count + 1)
          })

          const x = (bodyA.position.x + bodyB.position.x) / 2
          const y = (bodyA.position.y + bodyB.position.y) / 2

          const ball = Bodies.circle(x, y, mergedRadius, {
            density: 0.00005,
            restitution: 0.2,
            friction: 0.005,
            id: ++tileId,
            render: {
              sprite: {
                texture: tileAsset[mergedSize],
                xScale: 1,
                yScale: 1,
              },
            },
          })

          World.add(engine.current.world, [ball])
        }
      })
    })

    return () => {
      Render.stop(render)
      World.clear(engine.current.world, false)
      Engine.clear(engine.current)
      render.canvas.remove()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render.canvas = null
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render.context = null
      render.textures = {}
    }
  }, [])

  const releaseBall = () => {
    if (!state$.engineEnabled.get()) return

    const radius = getTileRadius(state$.activeTile.peek())

    lastDroppedTileId = ++tileId

    const ball = Bodies.circle(state$.dropX.get() * 2, 64 * 2, radius, {
      density: 0.00005,
      restitution: 0.2,
      friction: 0.005,
      id: lastDroppedTileId,
      render: {
        sprite: {
          texture: tileAsset[state$.activeTile.peek()],
          xScale: 1,
          yScale: 1,
        },
      },
    })

    state$.activeTileCount[state$.activeTile.peek()].set((count) => count + 1)
    World.add(engine.current.world, [ball])
    actions$.drop()
  }

  const moveBall = (event: any) => {
    state$.mouseX.set(event.nativeEvent.offsetX)
  }

	// Native gesture handler
  // const gesture = Gesture.Pan()
	// 	.onBegin((event) => {
	// 		state$.mouseX.set(event.x)
	// 	})
  //   .onChange((event) => {
  //     state$.mouseX.set(event.x)
  //   })
  //   .onFinalize(releaseBall)

  return (
    <YStack
      bg="$playarea"
      bw={4}
      btw={0}
      boc="$border"
      w={width}
      h={height}
      style={{ boxSizing: 'content-box' }}
    >
      {/* <GestureDetector gesture={gesture}> */}
        <YStack
          ref={scene}
          onPress={releaseBall}
          onPointerMove={moveBall}
          pos="absolute"
          w={width + 64 * 2}
          h={height + 64 * 2}
          l={-64}
          t={-64}
        >
          <TileDropPositioner>
            <Tile size={state$.activeTile} />
          </TileDropPositioner>
        </YStack>
      {/* </GestureDetector> */}
    </YStack>
  )
})

export const Board = observer(() => {
  return (
    <YStack gap="$2" pos="relative" ai="flex-start">
      <Spacer size={20} />
      <BoardComp />
    </YStack>
  )
})
