import { observer, useObserveEffect } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { Engine, World, Events, Bodies, Composite, Body, Constraint, Vector } from 'matter-js'
import { useRef, useEffect, ReactNode } from 'react'
import {
  getMergedTileSize,
  getTileDensity,
  getTilePower,
  getTileRadius,
  getTileSizeFromPower,
} from '../tiles'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

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
import { XStack, YStack, useIsTouchDevice } from '@my/ui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  SharedValue,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated'
import { appActions$, appState$ } from 'app/appState'
import { GameTile } from './GameTile'
import Matter from 'matter-js'
import React from 'react'
import { GameEngine } from 'app/react-native-game-engine/GameEngine'
import { GameEngineSystem } from 'app/react-native-game-engine/rnge-types'

Matter.Common.isElement = () => false //-- Overriding this function because the original references HTMLElement
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const GameScale = 1

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

type CreateTileData = {
  size: TileSize
  position: { x: number; y: number }
  velocity?: { x: number; y: number }
  viaMerge: boolean
}
let tilesToCreate: Record<string, CreateTileData> = {}
let bodiesToRemove: Record<string, Body | Constraint> = {}
let collidedTiles: Record<string, true> = {}

const createBounds = (cw: number, ch: number) => {
  return [
    // Top Sensor
    Bodies.rectangle(cw / 2, -200 + 128, cw, 400, {
      id: 100,
      isSensor: true,
      isStatic: true,
      render: { opacity: 0 },
      label: topOutSensorLabel,
      collisionFilter: {
        category: categoryTopOut,
      },
    }),

    // Left Boundary
    Bodies.rectangle(-200, ch / 2, 400, ch, {
      isStatic: true,
      render: { opacity: 0 },
      friction: 0.1,
      frictionStatic: 0,
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
      label: 'LeftBound',
    }),
    // Bottom Boundary
    Bodies.rectangle(cw / 2, ch + 200, cw, 400, {
      isStatic: true,
      render: { opacity: 0 },
      friction: 0.1,
      frictionStatic: 0,
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
      label: 'RightBound',
    }),
    // Right Boundary
    Bodies.rectangle(cw + 200, ch / 2, 400, ch, {
      isStatic: true,
      render: { opacity: 0 },
      friction: 0.1,
      frictionStatic: 0,
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics },
      label: 'BottomBound',
    }),
  ]
}

const createTile = (data: CreateTileData) => {
  const { size, position, velocity } = data

  const radius = getTileRadius(size) / 2
  const power = getTilePower(size)
  const density = getTileDensity(size)

  const ballId = ++tileId
  const sensorId = ++tileId
  const constraintId = ++tileId

  const ballTile = Bodies.circle(
    position.x,
    position.y,
    radius,
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
          xScale: 0.5,
          yScale: 0.5,
        },
      },
      label: 'Tile',
      collisionFilter: { category: categoryPhysics, mask: categoryPhysics, group: power },
    },
    28
  )

  const ballSensor = Bodies.circle(position.x, position.y, radius + 2, {
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

const tick = 1000 / 120

const PhysicsSystem: GameEngineSystem = (entities, { time }) => {
  if (state$.gamePhysicsPaused.peek()) return entities

  const engine = entities['physics']?.engine

  const iterations = Math.round(time.delta / tick)
  for (let i = 0; i < iterations; i++) {
    Matter.Engine.update(engine, tick)
  }

  return entities
}

const CreateTileSystem: GameEngineSystem = (entities) => {
  Object.entries(tilesToCreate).forEach(([collisionId, createTileData]) => {
    const tileBodies = createTile(createTileData)

    // Pop sound effect
    if (createTileData.viaMerge) {
      appActions$.triggerPopSound(createTileData.size, collisionId)
    }

    // Update efficiency score
    if (createTileData.viaMerge && createTileData.size === state$.targetEfficiency.peek()) {
      actions$.triggerHighEfficiencyCheck(createTileData.size)
    }

    World.add(entities['physics']?.world, tileBodies)

    // Index in state by sensor
    entities[tileBodies[0]!.id] = {
      body: tileBodies[0]!, // ballTile itself
      size: createTileData.size,
      renderer: GameTile,
    }
  })

  tilesToCreate = {}

  return entities
}

const RemoveTileSystem: GameEngineSystem = (entities) => {
  Object.keys(bodiesToRemove).forEach((bodyId) => {
    if (bodyId in entities) {
      delete entities[bodyId]
    }
  })

  // Remove from world
  World.remove(entities['physics']?.world, Object.values(bodiesToRemove))

  bodiesToRemove = {}
  return entities
}

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

export const Game = observer(
  // eslint-disable-next-line react/display-name
  React.memo(() => {
    // MATTER-JS
    const engine = useRef(
      Engine.create({
        positionIterations: 12,
        // velocityIterations: 12,
        gravity: { x: 0, y: 1, scale: 0.0018 },
      })
    )
    const boundBodies = useRef(
      createBounds((width - 8) * GameScale, (height - 4 + 128) * GameScale)
    )

    useObserveEffect(
      () => state$.resetCount.get(),
      async ({ value }) => {
        if (value === 0 || engine.current == null) return

        const bodies = Composite.allBodies(engine.current!.world)

        for (let i = bodies.length - 1; i >= 0; i--) {
          if (bodies[i]!.label === 'Tile') {
            bodiesToRemove[bodies[i]!.id] = bodies[i]!
            const power = (bodies[i]?.collisionFilter.group ?? 3) as TilePower
            if (power >= 4) {
              appActions$.triggerPopSound(getTileSizeFromPower(power), bodies[i]?.id ?? power)
            }
            await sleep(25)
          }
        }

        Composite.clear(engine.current!.world, false)

        handledCollisions = {}
        collidedTiles = {}
        tilesToCreate = {}

        World.add(engine.current.world, boundBodies.current)

        state$.resetting.set(false)
      }
    )

    useEffect(() => {
      engine.current.positionIterations = 12
      // engine.current.velocityIterations = 12

      World.add(engine.current.world, boundBodies.current)

      const collisionActiveCallback = (event: Matter.IEventCollision<Engine>) => {
        // Prevent top-out after game ends and before reset complete
        if (state$.toppedOut.peek() || state$.resetting.peek()) return

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

      const collisionStartCallback = (event: Matter.IEventCollision<Engine>) => {
        // Prevent collisions after game ends
        if (state$.toppedOut.peek() || state$.resetting.peek()) return

        const { pairs } = event

        pairs.forEach((pair) => {
          const { id, bodyA, bodyB } = pair

          // Escape if not sensor
          if (
            bodyA.collisionFilter.category == null ||
            bodyA.collisionFilter.category === categoryPhysics ||
            bodyB.collisionFilter.category == null ||
            bodyB.collisionFilter.category === categoryPhysics
          )
            return

          // Escape if collision already handled
          if (handledCollisions[id]) return
          handledCollisions[id] = true

          if (bodyA.collisionFilter.category === bodyB.collisionFilter.category) {
            const power = bodyA.collisionFilter.group

            const sensorA = bodyA as BodyWithCascadeDelete
            const sensorB = bodyB as BodyWithCascadeDelete
            const lowestVelocitySensor =
              Vector.magnitude(sensorA.velocity) < Vector.magnitude(sensorB.velocity)
                ? sensorA
                : sensorB
            const positionCenter = Vector.div(Vector.add(sensorA.position, sensorB.position), 2)
            const position = Vector.div(
              Vector.add(positionCenter, lowestVelocitySensor.position),
              2
            )
            const velocity = Vector.div(Vector.add(sensorA.velocity, sensorB.velocity), 3)

            // Escape if tiles already collided
            if (collidedTiles[sensorA.id] || collidedTiles[sensorB.id]) return

            collidedTiles[sensorB.id] = true

            // Created merged tile
            const size = getTileSizeFromPower(power as TilePower)
            const mergedSize = getMergedTileSize(size)

            tilesToCreate[id] = {
              size: mergedSize,
              position,
              velocity,
              viaMerge: true,
            }

            // Remove tiles
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _bodies = [
              sensorA,
              ...(sensorA.cascadeDelete ?? []),
              sensorB,
              ...(sensorB.cascadeDelete ?? []),
            ].forEach((body) => {
              bodiesToRemove[body.id] = body
            })

            state$.activeTileCount[size].set((count) => count - 2)
          }
        })
      }
      Events.on(engine.current, 'collisionStart', collisionStartCallback)

      return () => {
        World.clear(engine.current.world, false)
        Engine.clear(engine.current)

        Events.off(engine.current, 'collisionActive', collisionActiveCallback)
        Events.off(engine.current, 'collisionStart', collisionStartCallback)
      }
    }, [])

    return (
      <GameEngine
        style={{
          position: 'absolute',
          width: (width - 8) * GameScale,
          height: (height - 4 + 128) * GameScale,
          left: 0,
          top: 0,
        }}
        systems={[PhysicsSystem, CreateTileSystem, RemoveTileSystem]}
        entities={{
          physics: { engine: engine.current, world: engine.current.world },
        }}
      />
    )
  })
)

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

    tilesToCreate['fresh'] = {
      size: state$.activeTile.peek(),
      position: { x: dropX.value, y: 128 },
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
      <Game />

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
    <YStack gap="$2" pos="relative" ai="flex-start" mt={23}>
      <BoardComp />
    </YStack>
  )
})
