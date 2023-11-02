import React, { useRef } from 'react'
import { StatusBar } from 'react-native'
import { Box } from './renderers'
import Matter, { Engine } from 'matter-js'
import { GameEngine } from 'app/react-native-game-engine'
import { YStack } from '@my/ui'
import { Physics, CreateBox, MoveBox, CleanBoxes } from './systems'

Matter.Common.isElement = () => false //-- Overriding this function because the original references HTMLElement

const width = 450
const height = 700

export const RigidBodies = () => {
  const boxSize = Math.trunc(Math.max(width, height) * 0.075)

  const engine = useRef(
    Engine.create({
      positionIterations: 12,
      velocityIterations: 12,
      gravity: { x: 0, y: 1, scale: 0.0015 },
    })
  ).current
  const body = useRef(
    Matter.Bodies.rectangle(width / 2, -1000, boxSize, boxSize, { frictionAir: 0.021 })
  ).current
  const floor = useRef(
    Matter.Bodies.rectangle(width / 2, height - boxSize / 2, width, boxSize, {
      isStatic: true,
    })
  ).current
  const constraint = Matter.Constraint.create({
    label: 'Drag Constraint',
    pointA: { x: 0, y: 0 },
    pointB: { x: 0, y: 0 },
    length: 0.01,
    stiffness: 0.1,
  })

  Matter.World.add(engine.world, [body, floor])
  Matter.World.addConstraint(engine.world, constraint)

  return (
    <YStack w={width} h={height}>
      <GameEngine
        systems={[Physics, CreateBox, MoveBox, CleanBoxes]}
        entities={{
          physics: { engine: engine, world: engine.world, constraint: constraint },
          box: { body: body, size: [boxSize, boxSize], color: 'pink', renderer: Box },
          floor: { body: floor, size: [width, boxSize], color: '#86E9BE', renderer: Box },
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    </YStack>
  )
}
