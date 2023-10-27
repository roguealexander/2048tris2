import { observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { XStack, YStack } from '@my/ui'
import { ActiveTilesHistogram } from 'app/components/active-tile-histogram'
import { Board } from 'app/components/board'
import { HighEfficiencyPanel } from 'app/components/high-efficiency-panel'
import { Hold } from 'app/components/hold'
import { GameplayHoldListener } from 'app/components/hold-listener'
import { LeaderboardTab } from 'app/components/leaderboard-tab'
import { Queue } from 'app/components/queue'
import { RulesTab } from 'app/components/rules-tab'
import { Efficiency, Score } from 'app/components/stats'
import { StatsPersistor } from 'app/components/stats-persistor'
import { Tile } from 'app/components/tile'
import { TopOutPanel } from 'app/components/top-out-panel'
import { UserTab } from 'app/components/user-tab'
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
    <XStack w="100%" mih="100vh" mah="100vh" als="center" jc="center" f={1} gap={64} pt={64}>
      <StatsPersistor />
      <GameplayHoldListener />

      {/* LEFT */}
      <TopOutPanel />
      <HighEfficiencyPanel />
      <ActiveLeftPanel />

      {/* BOARD */}
      <Board />

      {/* RIGHT */}
      <ActiveRightPanel />

      {/* OVERLAY */}
      <RulesTab />
      <LeaderboardTab />
      <UserTab />
    </XStack>
  )
}

export default HomeScreen
