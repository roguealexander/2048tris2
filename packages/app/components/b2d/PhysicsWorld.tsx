/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-check
import React, { useLayoutEffect, useRef, ReactNode, RefObject } from 'react'
import {
  b2World,
  b2Vec2,
  b2BodyDef,
  b2FixtureDef,
  b2Body,
  b2CircleShape,
  b2BodyType,
  b2ContactListener,
} from '@flyover/box2d'
import {
  SCALE,
  fromCanvasToPhysics,
  fromPhysicsToCanvas,
  useAnimationFrame,
  makeEnclosedBox,
} from './Utils'
import worldContext from './WorldContext'
import { TileSize } from 'app/types'
import { getMergedTileSize, getTileDensity, getTileRadius } from 'app/tiles'
import { appActions$, appState$ } from 'app/appState'
import { actions$, state$ } from 'app/state'
import { observable } from '@legendapp/state'
import { View } from 'react-native'
const { Provider } = worldContext

const width = 450
const height = 675
const enclosureThickness = 100

let time = 0
let tileId = 0

type CreateTileData = {
  size: TileSize
  position: { x: number; y: number }
  velocity?: { x: number; y: number }
  viaMerge: boolean
}
export let b2dTilesToCreate: Record<string, CreateTileData> = {}
export const b2dTileBodies: Record<string, b2Body> = {}
export const b2dTileRefs: Record<number, RefObject<View>> = {}
export const b2dTiles$ = observable<Array<{ id: number; size: TileSize }>>([])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PhysicsSystem = (world: b2World, deltaTime: number) => {
  if (state$.gamePhysicsPaused.peek()) return

  const iterations = Math.min(4, Math.round(deltaTime / (1000 / 120)))
  for (let i = 0; i < iterations; i++) {
    world.Step(
      1 / 90, //frame-rate
      2, //velocity iterations
      2 //position iterations
    )
  }

  world.ClearForces()
}

const createTile = (world: b2World, data: CreateTileData): b2Body => {
  const bodyDef = new b2BodyDef()
  bodyDef.type = b2BodyType.b2_dynamicBody
  const fixDef = new b2FixtureDef()

  fixDef.shape = new b2CircleShape(fromCanvasToPhysics(getTileRadius(data.size) / 2, SCALE))
  fixDef.density = 1.5 * getTileDensity(data.size)
  fixDef.friction = 0.1
  fixDef.restitution = 0.1

  bodyDef.position.x = fromCanvasToPhysics(data.position.x, SCALE)
  bodyDef.position.y = fromCanvasToPhysics(data.position.y, SCALE)

  if (data.velocity != null) {
    bodyDef.linearVelocity.x = fromCanvasToPhysics(data.velocity.x, SCALE)
    bodyDef.linearVelocity.y = fromCanvasToPhysics(data.velocity.y, SCALE)
  }

  const fixt = world.CreateBody(bodyDef).CreateFixture(fixDef)
  fixt.m_body.SetUserData({ category: '_TILE_', id: ++tileId, size: data.size })

  // Add to state
  state$.activeTileCount[data.size].set((count) => count + 1)

  return fixt.m_body
}

const CollisionSystem = (world: b2World) => {
  // Exit if physics not running
  if (state$.gamePhysicsPaused.peek()) return

  for (let c = world.GetContactList(); c; c = c.m_next) {
    const {
      m_fixtureA: { m_body: m_bodyA },
      m_fixtureB: { m_body: m_bodyB },
      m_touchingFlag,
    } = c

    if (
      (m_bodyA.m_userData['category'] === '_TOP_OUT_SENSOR_' ||
        m_bodyB.m_userData['category'] === '_TOP_OUT_SENSOR_') &&
      (m_bodyA.m_userData['category'] === '_TILE_' || m_bodyB.m_userData['category'] === '_TILE_')
    ) {
      const overlapBody = m_bodyA.m_userData['category'] === '_TOP_OUT_SENSOR_' ? m_bodyB : m_bodyA
      const overlapDuration = time - (overlapBody.m_userData['top_out_overlap_start_time'] ?? time)
      if (overlapDuration > 2000) {
        actions$.topOut()
      }
    }

    if (
      m_touchingFlag &&
      m_bodyA.m_userData['size'] != null &&
      m_bodyA.m_userData['size'] === m_bodyB.m_userData['size'] &&
      m_bodyA.m_userData.removed !== true &&
      m_bodyB.m_userData.removed !== true
    ) {
      // Remove bodies
      m_bodyA.m_userData.removed = true
      m_bodyB.m_userData.removed = true

      // Update state
      const size = m_bodyA.m_userData['size'] as TileSize
      const mergedSize = getMergedTileSize(size)
      state$.activeTileCount[size].set((count) => count - 2)

      // Create merged tile
      const aVel = m_bodyA.GetLinearVelocity()
      const bVel = m_bodyB.GetLinearVelocity()
      const mergedVel = {
        x: fromPhysicsToCanvas((aVel.x + bVel.x) / 2, SCALE),
        y: fromPhysicsToCanvas((aVel.y + bVel.y) / 2, SCALE),
      }
      const aVelComponent = (aVel.Length() / (aVel.Length() + bVel.Length())) * 0.8

      const aPos = m_bodyA.GetPosition()
      const bPos = m_bodyB.GetPosition()
      const lerpedX = aPos.x * (0.8 - aVelComponent) + bPos.x * (0.2 + aVelComponent)
      const lerpedY = aPos.y * (0.8 - aVelComponent) + bPos.y * (0.2 + aVelComponent)
      const mergedPos = {
        x: fromPhysicsToCanvas(lerpedX, SCALE),
        y: fromPhysicsToCanvas(lerpedY, SCALE),
      }

      b2dTilesToCreate[`${m_bodyA.m_userData['id']}-${m_bodyB.m_userData['id']}`] = {
        size: mergedSize,
        position: mergedPos,
        velocity: mergedVel,
        viaMerge: true,
      }
    }
  }
}

const UpdateTilePositionsSystem = (world: b2World) => {
  const worldScale = appState$.scale.peek()

  for (let b = world.m_bodyList; b; b = b.m_next) {
    if (!b.IsAwake()) {
      continue
    }

    const userData = b.GetUserData()

    if (userData && userData.category === '_TILE_') {
      const id = userData['id']
      const size = userData['size']
      const { x, y } = b.GetPosition()
      const angle = b.GetAngle()
      const tileRef = b2dTileRefs[id]
      const tileRadius = getTileRadius(size)

      if (tileRef != null && tileRef.current != null) {
        const xPos = (fromPhysicsToCanvas(x, SCALE) - tileRadius / 2) * worldScale
        const yPos = (fromPhysicsToCanvas(y, SCALE) - tileRadius / 2) * worldScale

        if ('setNativeProps' in tileRef.current) {
          tileRef.current.setNativeProps({
            transform: [{ translateX: xPos }, { translateY: yPos }, { rotate: angle + 'rad' }],
          })
        } else if ('style' in tileRef.current) {
          // @ts-ignore
          tileRef.current.style.transform = `translateX(${xPos}px) translateY(${yPos}px) rotate(${angle}rad)`
        }
      }
    }
  }
}

const CreateTileSystem = (world: b2World) => {
  const createdTileIds: Array<{ id: number; size: TileSize }> = []

  Object.entries(b2dTilesToCreate).forEach(([collisionId, createTileData]) => {
    const tileBody = createTile(world, createTileData)
    const tileBodyId = tileBody.m_userData['id'] as number

    // Pop sound effect
    if (createTileData.viaMerge) {
      appActions$.triggerPopSound(createTileData.size, collisionId)
    }

    // Update efficiency score
    if (createTileData.viaMerge && createTileData.size === state$.targetEfficiency.peek()) {
      actions$.triggerHighEfficiencyCheck(createTileData.size)
    }

    // Index in state by sensor
    createdTileIds.push({ id: tileBodyId, size: createTileData.size })

    b2dTileBodies[tileBodyId] = tileBody
  })

  b2dTilesToCreate = {}

  if (createdTileIds.length === 0) return

  b2dTiles$.set((tiles) => [...tiles, ...createdTileIds])
}

const RemoveTileSystem = (world: b2World) => {
  const removedTileIds: Record<number, true> = {}
  for (let b = world.m_bodyList; b; b = b.m_next) {
    if (b.m_userData && b.m_userData.removed) {
      removedTileIds[b.m_userData['id']] = true
      world.DestroyBody(b)
      continue
    }
  }
  b2dTiles$.set((tiles) => tiles.filter((tile) => !(tile.id in removedTileIds)))
}

export function UsePhysicsWorld() {
  const world = useRef(new b2World(new b2Vec2(0, 20)))

  // @ts-ignore
  world.current.scaleFactor = SCALE

  const listener = useRef(new b2ContactListener())

  listener.current.BeginContact = (contact) => {
    const {
      m_fixtureA: { m_body: m_bodyA },
      m_fixtureB: { m_body: m_bodyB },
    } = contact

    if (
      (m_bodyA.m_userData['category'] === '_TOP_OUT_SENSOR_' ||
        m_bodyB.m_userData['category'] === '_TOP_OUT_SENSOR_') &&
      (m_bodyA.m_userData['category'] === '_TILE_' || m_bodyB.m_userData['category'] === '_TILE_')
    ) {
      const overlapBody = m_bodyA.m_userData['category'] === '_TOP_OUT_SENSOR_' ? m_bodyB : m_bodyA
      overlapBody.m_userData['top_out_overlap_start_time'] = time
    }
  }

  world.current.SetContactListener(listener.current)

  useLayoutEffect(() => {
    if (world.current.m_bodyCount === 0) {
      makeEnclosedBox(width, height, enclosureThickness, world.current, SCALE)
    }
  }, [])

  useAnimationFrame(function (deltaTime: number) {
    time += deltaTime

    // PHYSICS SYSTEM
    PhysicsSystem(world.current, deltaTime)

    // REMOVE TILE SYSTEM
    RemoveTileSystem(world.current)

    // CREATE TILE SYSTEM
    CreateTileSystem(world.current)

    // COLLISION SYSTEM
    CollisionSystem(world.current)

    // UPDATE POSITION SYSTEM
    UpdateTilePositionsSystem(world.current)
  })

  return { world: world.current }
}

export default function PhysicsWorld({ children }: { children: ReactNode }) {
  const { world: worldRef } = UsePhysicsWorld()

  return <Provider value={worldRef}>{children}</Provider>
}

export { worldContext }
