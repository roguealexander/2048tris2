import { Body } from 'matter-js'
import React from 'react'
import Animated from 'react-native-reanimated'
import { ScaledSize } from 'react-native'

type Props = {
  body: Body
  screen: ScaledSize
  layout: any
  size: [number, number]
  color?: string
}

export const Box = (props: Props) => {
  // console.log({
  //   props,
  // })
  const width = props.size[0]
  const height = props.size[1]
  const x = props.body.position.x - width / 2
  const y = props.body.position.y - height / 2
  const angle = props.body.angle

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        transform: [{ rotate: angle + 'rad' }],
        backgroundColor: props.color || 'pink',
      }}
    />
  )
}
