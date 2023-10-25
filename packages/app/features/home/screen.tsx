import { observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { XStack, YStack } from '@my/ui'
import { ActiveTilesHistogram } from 'app/components/active-tile-histogram'
import { Board } from 'app/components/board'
import { HighEfficiencyPanel } from 'app/components/high-efficiency-panel'
import { Hold } from 'app/components/hold'
import { HoldListener } from 'app/components/hold-listener'
import { Queue } from 'app/components/queue'
import { Efficiency, Score } from 'app/components/stats'
import { Tile } from 'app/components/tile'
import { TopOutPanel } from 'app/components/top-out-panel'
import { state$ } from 'app/state'
import { TileSize } from 'app/types'
import React from 'react'

const ActiveLeftPanel = observer(() => {
  if (state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return (
    <YStack w="$12" gap="$2">
      <Hold />
      <Score />
      <XStack w="100%" h={2} bg="$border" />
      <Efficiency />
      <XStack w="100%" h={2} bg="$border" />
      <ActiveTilesHistogram />
    </YStack>
  )
})

const ActiveRightPanel = observer(() => {
  if (state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return <Queue />
})

export function HomeScreen() {
  return (
    <XStack maw={1480} als="center" f={1} gap={64} pt={64}>
      <HoldListener />

      {/* LEFT */}
      <TopOutPanel />
      <HighEfficiencyPanel />
      <ActiveLeftPanel />

      {/* BOARD */}
      <Board />

      {/* RIGHT */}
      <ActiveRightPanel />
    </XStack>
  )
}

export default HomeScreen
