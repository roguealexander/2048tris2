import { ScaledSize, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

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

interface GameEngineEntity {
  [key: string]: any
  renderer?: React.FunctionComponent<any>
}

export type GameEngineEntities = Record<string | number, GameEngineEntity>

export type GameEngineSystem = (
  entities: GameEngineEntities,
  update: GameEngineUpdateEventOptionType
) => GameEngineEntities

export type GameEngineProperties = {
  systems?: GameEngineSystem[]
  entities?: GameEngineEntities
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}
