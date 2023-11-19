import { ReactNode, RefObject, useLayoutEffect, useRef } from 'react'
import { View } from 'react-native'
import {
  useAnimationFrame,
  fromCanvasToPhysics,
  fromPhysicsToCanvas,
  makeEnclosedBox,
} from './Utils'
import { TileSize } from 'app/types'
import { getMergedTileSize, getTileDensity, getTileMass, getTileRadius } from 'app/tiles'
import { batch, observable } from '@legendapp/state'
import { actions$, state$ } from 'app/state'
import { appActions$, appState$ } from 'app/appState'
import { api } from 'app/utils/api'
import { System, Circle, Vector, SystemConfig, Entity } from 'kinetics.ts'
import React from 'react'

let time = 0
let tileId = 0

const width = 450
const height = 675
const enclosureThickness = 100

type CreateTileData = {
  size: TileSize
  position: { x: number; y: number }
  velocity?: { x: number; y: number }
  viaMerge: boolean
  unmergedSize?: TileSize
}
type TileUserData = { id: number; size: TileSize; removed: boolean }
export let kineticsTilesToCreate: Record<string, CreateTileData> = {}
export const kineticsTileBodies: Record<string, Entity> = {}
export const kineticsTileRefs: Record<number, RefObject<View>> = {}
export const kineticsTiles$ = observable<Array<{ id: number; size: TileSize }>>([])
export const kineticsTileDatas: Record<string, TileUserData> = {}

export function useConst<T>(initialValue: T | (() => T)): T {
  const ref = useRef<{ value: T }>()
  if (ref.current === undefined) {
    ref.current = {
      // eslint-disable-next-line @typescript-eslint/ban-types
      value: typeof initialValue === 'function' ? (initialValue as Function)() : initialValue,
    }
  }
  return ref.current.value
}

const PhysicsSystem = (
  rapier: Rapier,
  world: World,
  eventQueue: RAPIER.EventQueue,
  deltaTime: number
) => {
  world.step(eventQueue)
}

const CollisionSystem = (
  rapier: Rapier,
  world: World,
  eventQueue: RAPIER.EventQueue,
  invalidateTRPC: () => void
) => {
  eventQueue.drainCollisionEvents((handle1, handle2, started) => {
    const body1 = world.getCollider(handle1).parent()
    const body2 = world.getCollider(handle2).parent()
    if (body1 == null || body2 == null) return

    if (
      started &&
      (body1.userData as TileUserData).category === '_TILE_' &&
      (body2.userData as TileUserData).category === '_TILE_' &&
      !(body1.userData as TileUserData).removed &&
      !(body2.userData as TileUserData).removed &&
      (body1.userData as TileUserData).size === (body2.userData as TileUserData).size
    ) {
      // eslint-disable-next-line no-extra-semi
      ;(body1.userData as TileUserData).removed = true
      ;(body2.userData as TileUserData).removed = true

      const size = (body1.userData as TileUserData).size
      const mergedSize = getMergedTileSize(size)

      const vel1 = body1.linvel()
      const vel1Mag = Math.sqrt(vel1.x * vel1.x + vel1.y * vel1.y)
      const vel2 = body2.linvel()
      const vel2Mag = Math.sqrt(vel2.x * vel2.x + vel2.y * vel2.y)
      const velMerged = {
        x: fromPhysicsToCanvas(vel1.x + vel2.x / 2),
        y: fromPhysicsToCanvas(vel1.y + vel2.y / 2),
      }
      const vel1Component = (vel1Mag / (vel1Mag + vel2Mag)) * 0.8

      const pos1 = body1.translation()
      const pos2 = body2.translation()
      const lerpedX = pos1.x * (0.8 - vel1Component) + pos2.x * (0.2 + vel1Component)
      const lerpedY = pos1.y * (0.8 - vel1Component) + pos2.y * (0.2 + vel1Component)
      const posMerged = {
        x: fromPhysicsToCanvas(lerpedX),
        y: fromPhysicsToCanvas(lerpedY),
      }

      kineticsTilesToCreate[`${handle1}-${handle2}`] = {
        size: mergedSize,
        position: posMerged,
        velocity: velMerged,
        viaMerge: true,
        unmergedSize: size,
      }
    }
  })
}

const createTile = (system: System, data: CreateTileData): Entity => {
  const tileEntity = new Circle(
    {
      form: {
        vertices: [
          new Vector(fromCanvasToPhysics(data.position.x), fromCanvasToPhysics(data.position.y)),
        ],
      },
      radius: fromCanvasToPhysics(getTileRadius(data.size) / 2),
      mass: 0.15 * getTileMass(data.size),
      elasticity: 0,
      speed: 0,
    },
    system
  )
  system.addEntity(tileEntity)

  if (data.velocity != null) {
    tileEntity.velocity = new Vector(
      fromCanvasToPhysics(data.velocity.x),
      fromCanvasToPhysics(data.velocity.y)
    )
  }

  kineticsTileDatas[tileEntity.id] = {
    id: tileEntity.id,
    size: data.size,
    removed: false,
  }

  // Add to state
  batch(() => {
    state$.activeTileCount[data.size].set((count) => count + 1)
    if (data.viaMerge && data.unmergedSize != null) {
      state$.activeTileCount[data.unmergedSize].set((count) => count - 2)
    }
  })

  return tileEntity
}

const CreateTileSystem = (system: System, invalidateTRPC: () => void) => {
  const createdTileIds: Array<{ id: number; size: TileSize }> = []

  Object.entries(kineticsTilesToCreate).forEach(([collisionId, createTileData]) => {
    const tileEntity = createTile(system, createTileData)
    const tileEntityId = tileEntity.id // (tileBody.userData as TileUserData).id
    console.log({
      tileEntityId,
    })

    // Pop sound effect
    if (createTileData.viaMerge) {
      appActions$.triggerPopSound(createTileData.size, collisionId)
    }

    // Update efficiency score
    if (createTileData.viaMerge && createTileData.size === state$.targetEfficiency.peek()) {
      actions$.triggerHighEfficiencyCheck(createTileData.size, invalidateTRPC)
    }

    // Index in state by sensor
    createdTileIds.push({ id: tileEntityId, size: createTileData.size })

    kineticsTileBodies[tileEntityId] = tileEntity
  })

  kineticsTilesToCreate = {}

  if (createdTileIds.length === 0) return

  kineticsTiles$.set((tiles) => [...tiles, ...createdTileIds])
}

const RemoveTileSystem = (rapier: Rapier, world: RAPIER.World) => {
  const removedTileIds: Record<number, true> = {}

  world.bodies.forEach((body) => {
    if (body.userData != null && (body.userData as TileUserData).removed) {
      removedTileIds[(body.userData as TileUserData).id] = true
      world.removeCollider(body.collider(0), false)
      world.removeRigidBody(body)
    }
  })

  kineticsTiles$.set((tiles) => tiles.filter((tile) => !(tile.id in removedTileIds)))
}

const UpdateTilePositionsSystem = (system: System) => {
  const worldScale = appState$.scale.peek()

  system.entities.forEach((entity) => {
    if (entity == null) return

    const userData = kineticsTileDatas[entity.id]

    if (userData != null) {
      const { id, size } = userData
      const { x, y } = entity.position
      const angle = entity.angle
      const tileRef = kineticsTileRefs[id]
      const tileRadius = getTileRadius(size)

      if (tileRef != null && tileRef.current != null) {
        const xPos = (fromPhysicsToCanvas(x) - tileRadius / 2) * worldScale
        const yPos = (fromPhysicsToCanvas(y) - tileRadius / 2) * worldScale

        if ('setNativeProps' in tileRef.current) {
          tileRef.current.setNativeProps({
            transform: [{ translateX: xPos }, { translateY: yPos }, { rotate: angle + 'rad' }],
          })
        } else if ('style' in tileRef.current) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          tileRef.current.style.transform = `translateX(${xPos}px) translateY(${yPos}px) rotate(${angle}rad)`
        }
      }
    }
  })
}

class BetterSystem extends System {
  constructor(config: SystemConfig) {
    super(config)
  }
  override update() {
    super.update()
    this.emit('tick')
  }
}

// eslint-disable-next-line react/display-name
export const KineticsWorld = React.memo(({ children }: { children?: ReactNode }) => {
  const utils = api.useContext()
  const system = useConst(
    new BetterSystem({
      tickRate: 60,
      friction: 0.05,
      collisionInfo: {
        cellSize: 6,
      },
      gravity: -0.001,
      dimensions: new Vector(fromCanvasToPhysics(width - 8), fromCanvasToPhysics(height + 120)),
      verbose: true,
    })
  ) as unknown as System

  system.on('tick', () => {
    // // Use the RAPIER module here.
    // const world = useConst(new rapier.World({ x: 0.0, y: 9.81 }))
    // const eventQueue = useConst(new rapier.EventQueue(true))
    // useLayoutEffect(() => {
    //   makeEnclosedBox(system, width, height + 128, enclosureThickness, 4)
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    // useAnimationFrame(function (deltaTime: number) {
    //   time += deltaTime
    //   // PHYSICS SYSTEM
    //   PhysicsSystem(rapier, world, eventQueue, deltaTime)
    //   // COLLISION SYSTEM
    //   CollisionSystem(rapier, world, eventQueue, utils.invalidate)
    //   // REMOVE TILE SYSTEM
    //   RemoveTileSystem(rapier, world)
    // CREATE TILE SYSTEM
    CreateTileSystem(system, utils.invalidate)
    // UPDATE POSITION SYSTEM
    UpdateTilePositionsSystem(system)
  })

  return <>{children}</>
})
