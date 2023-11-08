import { ScaledSize, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { TileSize } from 'app/types'

export interface TimeUpdate {
  current: number
  delta: number
  previous: number
  previousDelta: number
}

export interface GameEngineUpdateEventOptionType {
  screen: ScaledSize
  time: TimeUpdate
}

export type GameEngineEntity = {
  [key: string]: any
  id: string | number
  size?: TileSize
  renderer?: React.FunctionComponent<any>
}

export type GameEngineEntities = GameEngineEntity[]

export type GameEngineSystem = (update: GameEngineUpdateEventOptionType) => void

export type GameEngineProperties = {
  systems?: GameEngineSystem[]
  entities?: GameEngineEntities
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}
