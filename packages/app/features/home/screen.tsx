import { observable } from '@legendapp/state'
import {
  XStack,
  YStack,
} from '@my/ui'
import { ActiveTilesHistogram } from 'app/components/active-tile-histogram'
import { Board } from 'app/components/board'
import { Hold } from 'app/components/hold'
import { HoldListener } from 'app/components/hold-listener'
import { Queue } from 'app/components/queue'
import { Stats } from 'app/components/stats'
import { Tile } from 'app/components/tile'
import { TileSize } from 'app/types'
import React from 'react'

export function HomeScreen() {
  return (
    <XStack maw={1480} als="center" f={1} gap={64} pt={64}>
      <HoldListener />
      <YStack w="$12" gap="$2">
        <Hold />
        <Stats />
        <ActiveTilesHistogram />
      </YStack>
      <Board />
      <Queue />
    </XStack>
  )
}

export default HomeScreen
