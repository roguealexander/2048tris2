/* eslint-disable @typescript-eslint/ban-ts-comment */
//I hate writing utils file. Typically that means don't know how to group your utilities
//for now this will have to do
import { b2BodyDef, b2FixtureDef, b2PolygonShape, b2BodyType, b2World } from '@flyover/box2d'
import React from 'react'

export const SCALE = 60

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
  width: number,
  height: number,
  thickness: number,
  world: b2World,
  SCALE: number
) {
  const bodyDef = new b2BodyDef()
  bodyDef.type = b2BodyType.b2_staticBody
  const fixDef = new b2FixtureDef()
  fixDef.shape = new b2PolygonShape()
  // half width, half height.
  fixDef.density = 1.0
  fixDef.friction = 0.5
  fixDef.restitution = 0

  //left
  // @ts-ignore
  fixDef.shape.SetAsBox(fromCanvasToPhysics(thickness, SCALE), fromCanvasToPhysics(height, SCALE))
  bodyDef.position.x = fromCanvasToPhysics(-thickness, SCALE)
  bodyDef.position.y = fromCanvasToPhysics(height / 2, SCALE)
  let fixt = world.CreateBody(bodyDef).CreateFixture(fixDef)
  fixt.m_body.SetUserData({ category: '_LEFT_WALL_' })

  //bottom
  //half width,half height
  // @ts-ignore
  fixDef.shape.SetAsBox(fromCanvasToPhysics(width, SCALE), fromCanvasToPhysics(thickness, SCALE))
  bodyDef.position.x = fromCanvasToPhysics(width / 2, SCALE)
  bodyDef.position.y = fromCanvasToPhysics(height + thickness - 4, SCALE)
  fixt = world.CreateBody(bodyDef).CreateFixture(fixDef)
  fixt.m_body.SetUserData({ category: '_BOTTOM_WALL_' })

  //right
  // @ts-ignore
  fixDef.shape.SetAsBox(fromCanvasToPhysics(thickness, SCALE), fromCanvasToPhysics(height, SCALE))
  bodyDef.position.x = fromCanvasToPhysics(width + thickness - 8, SCALE)
  bodyDef.position.y = fromCanvasToPhysics(height / 2, SCALE)
  fixt = world.CreateBody(bodyDef).CreateFixture(fixDef)
  fixt.m_body.SetUserData({ category: '_RIGHT_WALL_' })

  //top
  fixDef.isSensor = true
  // @ts-ignore
  fixDef.shape.SetAsBox(fromCanvasToPhysics(width, SCALE), fromCanvasToPhysics(thickness, SCALE))
  bodyDef.position.x = fromCanvasToPhysics(width / 2, SCALE)
  bodyDef.position.y = fromCanvasToPhysics(-thickness - 16, SCALE)
  const topSensorFixt = world.CreateBody(bodyDef).CreateFixture(fixDef)
  topSensorFixt.m_body.SetUserData({ category: '_TOP_OUT_SENSOR_' })
}

export function delay(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millis)
  })
}

//https://css-tricks.com/using-requestanimationframe-with-react-hooks
export function useAnimationFrame(callback: (deltaTime: number) => void) {
  const requestRef = React.useRef<any>()
  const previousTimeRef = React.useRef()

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      if (deltaTime > 16) {
        callback(deltaTime)
        previousTimeRef.current = time
      }
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
