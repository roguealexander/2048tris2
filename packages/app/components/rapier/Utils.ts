/* eslint-disable @typescript-eslint/ban-ts-comment */
//I hate writing utils file. Typically that means don't know how to group your utilities
//for now this will have to do
import RAPIER, { World } from '@dimforge/rapier2d-compat'
import React from 'react'

type Rapier = typeof RAPIER

const SCALE = 60

//some utilities to deal with co-ordinate systems constiations with some sanity intact
//seems simple enough. But without these , I get very easily confused

//Box2d typically deals with meters(real world) and not pixels(our canvas on screen)
export function fromPhysicsToCanvas(n: number, GSCALE = SCALE) {
  return n * GSCALE
}

export function fromCanvasToPhysics(n: number, GSCALE = SCALE) {
  return n / GSCALE
}

//without this , beginners (and almost everybody) will go mad
//this creates a box fence of static bodies to prevent the objects falling out of the visible area and continuing to fall infinitely like Alice in rabbit hole
export function makeEnclosedBox(
  rapier: Rapier,
  width: number,
  height: number,
  thickness: number,
  borderThickness: number,
  world: World
) {
  const leftWallDesc = rapier.ColliderDesc.cuboid(
    fromCanvasToPhysics(thickness),
    fromCanvasToPhysics(height)
  )
    .setTranslation(fromCanvasToPhysics(-thickness), fromCanvasToPhysics(height / 2))
    .setFriction(0.5)
    .setDensity(1)
    .setRestitution(0)
  world.createCollider(leftWallDesc)

  const rightWallDesc = rapier.ColliderDesc.cuboid(
    fromCanvasToPhysics(thickness),
    fromCanvasToPhysics(height)
  )
    .setTranslation(
      fromCanvasToPhysics(width + thickness - borderThickness * 2),
      fromCanvasToPhysics(height / 2)
    )
    .setFriction(0.5)
    .setDensity(1)
    .setRestitution(0)
  world.createCollider(rightWallDesc)

  const bottomWallDesc = rapier.ColliderDesc.cuboid(
    fromCanvasToPhysics(width),
    fromCanvasToPhysics(thickness)
  )
    .setTranslation(
      fromCanvasToPhysics(width / 2),
      fromCanvasToPhysics(height + thickness - borderThickness)
    )
    .setFriction(0.5)
    .setDensity(1)
    .setRestitution(0)
  world.createCollider(bottomWallDesc)

  const topWallDesc = rapier.ColliderDesc.cuboid(
    fromCanvasToPhysics(width),
    fromCanvasToPhysics(thickness)
  )
    .setTranslation(fromCanvasToPhysics(width / 2), fromCanvasToPhysics(-thickness))
    .setFriction(0.5)
    .setDensity(1)
    .setRestitution(0)
    .setSensor(true)
  world.createCollider(topWallDesc)
}

export function delay(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millis)
  })
}

//https://css-tricks.com/using-requestanimationframe-with-react-hooks
export function useAnimationFrame(callback: (deltaTime: number) => void) {
  const requestRef = React.useRef<any>()
  const previousTimeRef = React.useRef<number | undefined>()

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
      previousTimeRef.current = time
    } else {
      previousTimeRef.current = time
    }
    requestRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Make sure the effect runs only once
}
