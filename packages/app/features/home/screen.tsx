import { observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { XStack, YStack } from '@my/ui'
import { ActiveTilesHistogram } from 'app/components/active-tile-histogram'
import { Board } from 'app/components/board'
import { Hold } from 'app/components/hold'
import { HoldListener } from 'app/components/hold-listener'
import { Queue } from 'app/components/queue'
import { Stats } from 'app/components/stats'
import { Tile } from 'app/components/tile'
import { TopOutLeftPanel } from 'app/components/top-out-overlay'
import { state$ } from 'app/state'
import { TileSize } from 'app/types'
import React from 'react'

const ActiveLeftPanel = observer(() => {
  if (state$.toppedOut.get()) return null
  return (
    <YStack w="$12" gap="$2">
      <Hold />
      <Stats />
      <ActiveTilesHistogram />
    </YStack>
  )
})

const ActiveRightPanel = observer(() => {
  if (state$.toppedOut.get()) return null
  return <Queue />
})

export function HomeScreen() {
  return (
    <XStack maw={1480} als="center" f={1} gap={64} pt={64}>
      <HoldListener />
      <TopOutLeftPanel />
      <ActiveLeftPanel />
      <Board />
      <ActiveRightPanel />
    </XStack>
  )
}

export default HomeScreen
