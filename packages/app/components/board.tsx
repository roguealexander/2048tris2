import { observer, useObserve } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import {
  Engine,
  Render,
  World,
  Events,
  Bodies,
  Runner,
  Composite,
  Body,
  Constraint,
  Vector,
} from 'matter-js'
import { useRef, useEffect, ReactNode } from 'react'
import {
  getMergedTileSize,
  getTileDensity,
  getTilePower,
  getTileRadius,
  getTileSizeFromPower,
} from '../tiles'
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
import { TilePower, TileRecord, TileSize } from '../types'
import { Spacer, XStack, YStack } from '@my/ui'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const WorldScale = 1

const width = 450
const height = 700

type BodyWithCascadeDelete = Body & { cascadeDelete?: (Constraint | Body)[] }

const categoryPhysics = 0x0001
const categoryTopOut = 0x0002
const categoryTile: TileRecord<number> = {
  '2': 0x0003,
  '4': 0x0004,
  '8': 0x0005,
  '16': 0x0006,
  '32': 0x0007,
  '64': 0x0008,
  '128': 0x0009,
  '256': 0x0010,
  '512': 0x0011,
  '1024': 0x0012,
  '2048': 0x0013,
  '4096': 0x0014,
  '8192': 0x0015,
}

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

let handledCollisions: Record<string, boolean> = {}
let tileId = 450
const topOutSensorLabel = 'top-out-sensor'

const createBounds = (cw: number, ch: number) => {
  return [
    // Top Sensor
    Bodies.rectangle(cw / 2, -200 + 64, cw, 400, {
      id: 100,
      isSensor: true,
      isStatic: true,
      render: { opacity: 0 },
      label: topOutSensorLabel,
      collisionFilter: {
        category: categoryTopOut,
        // mask:
        //   categoryTile['2'] |
        //   categoryTile['4'] |
        //   categoryTile['8'] |
        //   categoryTile['16'] |
        //   categoryTile['32'] |
        //   categoryTile['128'] |
        //   categoryTile['256'] |
        //   categoryTile['512'] |
        //   categoryTile['1024'] |
        //   categoryTile['2048'] |
        //   categoryTile['4096'] |
        //   categoryTile['8192'],
      },
    }),

    // Left Boundary
    Bodies.rectangle(-200 + 64 * WorldScale, ch / 2, 400, ch, {
      isStatic: true,
      render: { opacity: 0 },
      friction: 0.1,
      frictionStatic: 0,
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
      label: 'LeftBound',
    }),
    // Bottom Boundary
    Bodies.rectangle(cw / 2, ch + 200 - 64 * WorldScale, cw, 400, {
      isStatic: true,
      render: { opacity: 0 },
      friction: 0.1,
      frictionStatic: 0,
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
      label: 'RightBound',
    }),
    // Right Boundary
    Bodies.rectangle(cw + 200 - 64 * WorldScale, ch / 2, 400, ch, {
      isStatic: true,
      render: { opacity: 0 },
      friction: 0.1,
      frictionStatic: 0,
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
      label: 'BottomBound',
    }),
  ]
}

const createTile = (
  size: TileSize,
  position: { x: number; y: number },
  velocity?: { x: number; y: number }
) => {
  const radius = getTileRadius(size) / 2
  const power = getTilePower(size)
  const density = getTileDensity(size)

  const ballId = ++tileId
  const sensorId = ++tileId
  const constraintId = ++tileId

  const ballTile = Bodies.circle(
    position.x,
    position.y,
    radius * WorldScale,
    {
      id: ballId,
      mass: 1.5 * power * density,
      restitution: 0.3,
      friction: 0.05,
      frictionStatic: 0,
      frictionAir: 0,
      render: {
        sprite: {
          texture: tileAsset[size],
          xScale: 0.5 * WorldScale,
          yScale: 0.5 * WorldScale,
        },
      },
      label: 'Tile',
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
    },
    28
  )

  const ballSensor = Bodies.circle(position.x, position.y, (radius + 2) * WorldScale, {
    id: sensorId,
    mass: 0.00001,
    isSensor: true,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    collisionFilter: {
      category: categoryTile[size],
      mask: categoryTopOut | categoryTile[size],
      group: power,
    },
    render: { visible: false },
    label: 'Sensor',
  }) as BodyWithCascadeDelete

  const ballConstraint = Constraint.create({
    id: constraintId,
    bodyA: ballTile,
    bodyB: ballSensor,
    render: { visible: false },
  })

  ballSensor.cascadeDelete = [ballTile, ballConstraint]

  // Set velocity
  if (velocity != null) {
    Body.setVelocity(ballTile, velocity)
  }

  state$.activeTileCount[size].set((count) => count + 1)

  return [ballTile, ballSensor, ballConstraint]
}

const TileDropPositioner = observer(({ children }: { children: ReactNode }) => {
  const dropX = state$.dropX.get()
  return (
    <XStack pos="absolute" pe="none" l={dropX - 64} t={0} x="-50%" y="-50%">
      {state$.gamePhysicsPaused.get() ? null : children}
    </XStack>
  )
})

export const BoardComp = observer(() => {
  const scene = useRef<HTMLDivElement | null>(null)
  const engine = useRef(
    Engine.create({
      positionIterations: 12,
      velocityIterations: 12,
      gravity: { x: 0, y: 1, scale: 0.0015 },
    })
  )
  const runner = useRef(
    Runner.create({
      isFixed: false,
      delta: 1000 / 60,
    })
  )

  runner.current.enabled = !state$.gamePhysicsPaused.get()

  useObserve(
    () => state$.resetCount.get(),
    async ({ value }) => {
      if (value === 0 || engine.current == null) return

      const bodies = Composite.allBodies(engine.current!.world)

      for (let i = bodies.length - 1; i >= 0; i--) {
        if (bodies[i]!.label === 'Circle Body') {
          Composite.remove(engine.current.world, bodies[i]!)
          await sleep(25)
        }
      }

      Composite.clear(engine.current!.world, false)

      handledCollisions = {}

      const cw = (width + 64 * 2) * WorldScale
      const ch = (height + 64 * 2) * WorldScale

      World.add(engine.current.world, createBounds(cw, ch))

      state$.resetting.set(false)
    }
  )

  useEffect(() => {
    const cw = (width + 64 * 2) * WorldScale
    const ch = (height + 64 * 2) * WorldScale

    const render = Render.create({
      element: scene.current!,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 2,
      },
    })

    World.add(engine.current.world, createBounds(cw, ch))

    const tickCallback = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      runner.current.deltaMin = runner.current.fps > 60 ? 1000 / runner.current.fps : 1000 / 120
    }
    Events.on(runner.current, 'tick', tickCallback)

    Runner.start(runner.current, engine.current)
    Render.run(render)

    const collisionActiveCallback = (event: Matter.IEventCollision<Engine>) => {
      const { pairs } = event

      pairs.forEach((pair) => {
        const { timeUpdated, timeCreated, bodyA, bodyB } = pair

        if (
          bodyA.collisionFilter.category === categoryTopOut ||
          bodyB.collisionFilter.category === categoryTopOut
        ) {
          if (timeUpdated - timeCreated > 2000) {
            actions$.topOut()
          }
        }
      })
    }
    Events.on(engine.current, 'collisionActive', collisionActiveCallback)

    const collisionStartCallback = (event) => {
      const { pairs } = event

      pairs.forEach((pair) => {
        const { id, bodyA, bodyB } = pair

        if (
          bodyA.collisionFilter.category == null ||
          bodyA.collisionFilter.category === categoryPhysics ||
          bodyB.collisionFilter.category == null ||
          bodyB.collisionFilter.category === categoryPhysics
        )
          return

        if (handledCollisions[id]) return
        handledCollisions[id] = true

        if (bodyA.collisionFilter.category === bodyB.collisionFilter.category) {
          const power = bodyA.collisionFilter.group

          const sensorA = bodyA as BodyWithCascadeDelete
          const sensorB = bodyB as BodyWithCascadeDelete
          const position = Vector.div(Vector.add(sensorA.position, sensorB.position), 2)
          const velocity = Vector.div(Vector.add(sensorA.velocity, sensorB.velocity), 3)

          World.remove(engine.current.world, [
            sensorA,
            ...(sensorA.cascadeDelete ?? []),
            sensorB,
            ...(sensorB.cascadeDelete ?? []),
          ])

          // Created merged tile
          const size = getTileSizeFromPower(power as TilePower)
          const mergedSize = getMergedTileSize(size)
          const tileBodies = createTile(mergedSize, position, velocity)

          // Update efficiency score
          if (mergedSize === state$.targetEfficiency.peek()) {
            actions$.triggerHighEfficiencyCheck(mergedSize)
          }

          World.add(engine.current.world, tileBodies)
        }
      })
    }
    Events.on(engine.current, 'collisionStart', collisionStartCallback)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world, false)
      Engine.clear(engine.current)

      Events.off(runner.current, 'tick', tickCallback)
      Events.off(engine.current, 'collisionActive', collisionActiveCallback)
      Events.off(engine.current, 'collisionStart', collisionStartCallback)

      console.log('clear engine unmountaa')

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
    if (state$.gameInteractionPaused.get()) return

    const tileBodies = createTile(
      state$.activeTile.peek(),
      { x: state$.dropX.get() * WorldScale, y: 64 * WorldScale },
      { x: 0.01, y: 0 * WorldScale }
    )

    World.add(engine.current.world, tileBodies)

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

      <TileDropPositioner>
        <Tile size={state$.activeTile} />
      </TileDropPositioner>
      <YStack
        ref={scene}
        onPress={releaseBall}
        onPointerMove={moveBall}
        pos="absolute"
        w={width + 64 * 2}
        h={height + 64 * 2}
        l={-64}
        t={-64}
      ></YStack>
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
