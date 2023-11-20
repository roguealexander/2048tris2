import { ReactNode, RefObject, useLayoutEffect, useRef } from 'react'
import { View } from 'react-native'
import RAPIER, { World } from '@dimforge/rapier2d-compat'
import { suspend } from 'suspend-react'
import {
  useAnimationFrame,
  fromCanvasToPhysics,
  fromPhysicsToCanvas,
  makeEnclosedBox,
} from './Utils'
import { TileSize } from 'app/types'
import { getMergedTileSize, getTileDensity, getTileRadius } from 'app/tiles'
import { batch, observable } from '@legendapp/state'
import { actions$, state$ } from 'app/state'
import { appActions$, appState$ } from 'app/appState'
import { api } from 'app/utils/api'
import 'app/utils/globals'
import { importRapier } from './loadRapier'

type Rapier = typeof RAPIER

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
type TileUserData = { category: string; id: number; size: TileSize; removed: boolean }
export let rapierTilesToCreate: Record<string, CreateTileData> = {}
export const rapierTileBodies: Record<string, RAPIER.RigidBody> = {}
export const rapierTileRefs: Record<number, RefObject<View>> = {}
export const rapierTiles$ = observable<Array<{ id: number; size: TileSize }>>([])

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

      rapierTilesToCreate[`${handle1}-${handle2}`] = {
        size: mergedSize,
        position: posMerged,
        velocity: velMerged,
        viaMerge: true,
        unmergedSize: size,
      }
    }
  })
}

const createTile = (rapier: Rapier, world: World, data: CreateTileData): RAPIER.RigidBody => {
  const tileColliderDesc = rapier.ColliderDesc.ball(
    fromCanvasToPhysics(getTileRadius(data.size) / 2)
  )
    .setDensity(1.5 * getTileDensity(data.size))
    .setFriction(0.1)
    .setRestitution(0.1)
    .setActiveEvents(rapier.ActiveEvents.COLLISION_EVENTS)
  const tileBodyDesc = rapier.RigidBodyDesc.dynamic()
    .setLinvel(
      data.velocity != null ? fromCanvasToPhysics(data.velocity.x) : 0,
      data.velocity != null ? fromCanvasToPhysics(data.velocity.y) : 0
    )
    .setUserData({
      category: '_TILE_',
      id: ++tileId,
      size: data.size,
      removed: false,
    } as TileUserData)

  const tileBody = world.createRigidBody(tileBodyDesc)
  world.createCollider(tileColliderDesc, tileBody)
  tileBody.setTranslation(
    new RAPIER.Vector2(fromCanvasToPhysics(data.position.x), fromCanvasToPhysics(data.position.y)),
    true
  )

  // Add to state
  batch(() => {
    state$.activeTileCount[data.size].set((count) => count + 1)
    if (data.viaMerge && data.unmergedSize != null) {
      state$.activeTileCount[data.unmergedSize].set((count) => count - 2)
    }
  })

  return tileBody
}

const CreateTileSystem = (rapier: Rapier, world: World, invalidateTRPC: () => void) => {
  const createdTileIds: Array<{ id: number; size: TileSize }> = []

  Object.entries(rapierTilesToCreate).forEach(([collisionId, createTileData]) => {
    const tileBody = createTile(rapier, world, createTileData)
    const tileBodyId = (tileBody.userData as TileUserData).id

    // Pop sound effect
    if (createTileData.viaMerge) {
      appActions$.triggerPopSound(createTileData.size, collisionId)
    }

    // Update efficiency score
    if (createTileData.viaMerge && createTileData.size === state$.targetMilestone.peek()) {
      actions$.triggerMilestoneCheck(createTileData.size, invalidateTRPC)
    }

    // Index in state by sensor
    createdTileIds.push({ id: tileBodyId, size: createTileData.size })

    rapierTileBodies[tileBodyId] = tileBody
  })

  rapierTilesToCreate = {}

  if (createdTileIds.length === 0) return

  rapierTiles$.set((tiles) => [...tiles, ...createdTileIds])
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

  rapierTiles$.set((tiles) => tiles.filter((tile) => !(tile.id in removedTileIds)))
}

const UpdateTilePositionsSystem = (rapier: Rapier, world: RAPIER.World) => {
  const worldScale = appState$.scale.peek()

  world.bodies.forEach((body) => {
    const userData = body.userData as TileUserData

    if (userData != null && userData.category === '_TILE_') {
      const { id, size } = userData
      const { x, y } = body.translation()
      const angle = body.rotation()
      const tileRef = rapierTileRefs[id]
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

export const RapierWorld = ({ children }: { children?: ReactNode }) => {
  const utils = api.useContext()
  const rapier = suspend(importRapier)

  // // Use the RAPIER module here.
  // const world = useConst(new rapier.World({ x: 0.0, y: 9.81 }))
  // const eventQueue = useConst(new rapier.EventQueue(true))

  // useLayoutEffect(() => {
  //   makeEnclosedBox(rapier, width, height, enclosureThickness, 4, world)
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

  //   // CREATE TILE SYSTEM
  //   CreateTileSystem(rapier, world, utils.invalidate)

  //   // UPDATE POSITION SYSTEM
  //   UpdateTilePositionsSystem(rapier, world)
  // })

  return <>{children}</>
}
