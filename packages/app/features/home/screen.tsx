import { observer } from '@legendapp/state/react'
import { Stack, XStack, YStack, useMedia } from '@my/ui'
import { ActiveTilesHistogram } from 'app/components/active-tile-histogram'
import { Board } from 'app/components/board'
import { HighEfficiencyPanel } from 'app/components/high-efficiency-panel'
import { Hold } from 'app/components/hold'
import { GameplayHoldListener } from 'app/components/hold-listener'
import { LeaderboardTab } from 'app/components/leaderboard-tab'
import { NewGameButton } from 'app/components/new-game-button'
import { Queue } from 'app/components/queue'
import { HowToPlayTab } from 'app/components/how-to-play-tab'
import { Efficiency, Score } from 'app/components/stats'
import { StatsPersistor } from 'app/components/stats-persistor'
import { TopOutPanel } from 'app/components/top-out-panel'
import { UserTab } from 'app/components/user-tab'
import { state$ } from 'app/state'
import React, { ReactNode } from 'react'
import { PopSoundEffect } from 'app/components/pop-sound-effect'
import { ScreenWidthUpdater } from 'app/components/screen-width-updater'
import { appState$ } from 'app/appState'

const ActiveLeftPanel = observer(() => {
  const { md } = useMedia()
  if (md || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return (
    <YStack w="$12" gap="$4" mt={30}>
      <NewGameButton />
      <XStack w="100%" h={2} bg="$border" />
      <Score />
      <XStack w="100%" h={2} bg="$border" />
      <Efficiency />
      <XStack w="100%" h={2} bg="$border" />
      <ActiveTilesHistogram />
    </YStack>
  )
})

const ActiveRightPanel = observer(() => {
  const { md } = useMedia()
  if (md || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return (
    <YStack gap="$2" ai="flex-start">
      <Hold />
      <br />
      <Queue />
    </YStack>
  )
})

const ActiveBottomPanel = observer(() => {
  const { gtMd } = useMedia()
  if (gtMd || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return (
    <XStack gap="$2" w={450} jc="space-between">
      <Hold />
      <Queue />
    </XStack>
  )
})

const Container = observer(({ children }: { children: ReactNode }) => {
  return (
    <Stack
      $md={{ fd: 'column', gap: '$4', jc: 'flex-start', ai: 'center' }}
      $gtMd={{ fd: 'row', gap: 64, ai: 'flex-start', jc: 'center' }}
      miw={450}
      w="100%"
      mih="100vh"
      f={1}
      pt={64}
      px="$2"
      scale={appState$.boardScale.get()}
      style={{
        overflowX: 'hidden',
      }}
    >
      {children}
    </Stack>
  )
})

export function HomeScreen() {
  return (
    <>
      <ScreenWidthUpdater />
      <Container>
        <StatsPersistor />
        <GameplayHoldListener />
        <PopSoundEffect />

        {/* LEFT */}
        <TopOutPanel />
        <HighEfficiencyPanel />
        <ActiveLeftPanel />

        {/* BOARD */}
        <Board />

        {/* BOTTOM */}
        <ActiveBottomPanel />

        {/* RIGHT */}
        <ActiveRightPanel />

        {/* OVERLAY */}
        <HowToPlayTab />
        <LeaderboardTab />
        <UserTab />
      </Container>
    </>
  )
}

export default HomeScreen
