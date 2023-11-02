import { state$ } from 'app/state'
import { Box } from './renderers'
import Matter from 'matter-js'

let boxIds = 0

const distance = ([x1, y1], [x2, y2]) =>
  Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))

const Physics = (state, { time }) => {
  if (state$.gamePhysicsPaused.peek()) return state

  const engine = state['physics'].engine

  Matter.Engine.update(engine, time.delta)

  return state
}

const CreateBox = (state, { touches, screen }) => {
  const world = state['physics'].world
  const boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075)

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      const body = Matter.Bodies.rectangle(t.event.pageX, t.event.pageY, boxSize, boxSize, {
        frictionAir: 0.021,
      })
      Matter.World.add(world, [body])

      state[++boxIds] = {
        body: body,
        size: [boxSize, boxSize],
        color: boxIds % 2 == 0 ? 'pink' : '#B8E986',
        renderer: Box,
      }
    })

  return state
}

const MoveBox = (state, { touches }) => {
  const constraint = state['physics'].constraint

  //-- Handle start touch
  const start = touches.find((x) => x.type === 'start')

  if (start) {
    const startPos: [number, number] = [start.event.pageX, start.event.pageY]

    const boxId = Object.keys(state).find((key) => {
      const body = state[key].body

      return body && distance([body.position.x, body.position.y], startPos) < 25
    })

    if (boxId) {
      constraint.pointA = { x: startPos[0], y: startPos[1] }
      constraint.bodyB = state[boxId].body
      constraint.pointB = { x: 0, y: 0 }
      constraint.angleB = state[boxId].body.angle
    }
  }

  //-- Handle move touch
  const move = touches.find((x) => x.type === 'move')

  if (move) {
    constraint.pointA = { x: move.event.pageX, y: move.event.pageY }
  }

  //-- Handle end touch
  const end = touches.find((x) => x.type === 'end')

  if (end) {
    constraint.pointA = null
    constraint.bodyB = null
    constraint.pointB = null
  }

  return state
}

const CleanBoxes = (state, { touches, screen }) => {
  const world = state['physics'].world

  Object.keys(state)
    .filter((key) => state[key].body && state[key].body.position.y > screen.height * 2)
    .forEach((key) => {
      Matter.Composite.remove(world, state[key].body)
      delete state[key]
    })

  return state
}

export { Physics, CreateBox, MoveBox, CleanBoxes }
