import { Memo, Show, observer } from '@legendapp/state/react'
import { Stack, TSizableText, XStack, YStack, useMedia } from '@my/ui'
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
import { appState$ } from 'app/appState'
import { UserCircle2 } from '@tamagui/lucide-icons'
import { colors } from 'app/colors'
import { Dimensions } from 'react-native'
import { ShowStatsButton } from 'app/components/show-stats-button'
import { StatsPanel } from 'app/components/stats-panel'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ActiveLeftPanel = observer(() => {
  const { md } = useMedia()
  if (md || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return (
    <YStack w="$12" gap="$4" mt={23}>
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
  if (gtMd) return null
  return (
    <XStack gap="$2" w={450} jc="space-between">
      <Hold />
      <Queue />
    </XStack>
  )
})

const ActiveTopPanel = observer(() => {
  const { gtMd } = useMedia()
  if (gtMd || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null) return null
  return (
    <XStack mt={-22} mb={2} zi={3} gap="$2" w={450} jc="space-between">
      <YStack w="$50%">
        <TSizableText>
          Score:{' '}
          <TSizableText size="$5" fontWeight="bold">
            <Memo>{state$.score}</Memo>
          </TSizableText>
        </TSizableText>
        <TSizableText>
          Efficiency:{' '}
          <TSizableText size="$5" fontWeight="bold">
            <Memo>{state$.efficiency}</Memo>%
          </TSizableText>
        </TSizableText>
      </YStack>
      <XStack w="50%" gap="$2">
        <ShowStatsButton w={undefined} f={1} />
        <NewGameButton w={undefined} f={1} />
      </XStack>
    </XStack>
  )
})

const Container = observer(({ children }: { children: ReactNode }) => {
  const media = useMedia()
  const widthScale = Math.min(1, screenWidth / 462)
  const heightScale = Math.min(1, screenHeight / (media.gtMd ? 820 : 1000))
  const scale = Math.min(widthScale, heightScale)
  appState$.scale.set(scale)
  return (
    <Stack
      $md={{ fd: 'column', gap: '$2', jc: 'flex-start', ai: 'center' }}
      $gtMd={{ fd: 'row', gap: 64, ai: 'flex-start', jc: 'center' }}
      miw={462}
      w="100%"
      f={1}
      pt={84}
      px="$2"
      scale={scale}
      overflow="visible"
      style={{
        transformOrigin: 'top',
      }}
    >
      {children}
    </Stack>
  )
})

const Tabs = observer(() => {
  return (
    <XStack
      zi={10}
      h="$4"
      f={1}
      $md={{ w: 450 }}
      $gtMd={{ w: 866 }}
      flexWrap="wrap"
      ai="center"
      pos="absolute"
      t={0}
    >
      <XStack fullscreen o={0.9} bg="$background" />
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('2048tris')}
      >
        <Show if={appState$.tab.get() === '2048tris'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[2048]} />
        </Show>
        <TSizableText
          size="$5"
          zi={2}
          color={appState$.tab.get() === '2048tris' ? colors.background : colors.text}
        >
          2048tris
        </TSizableText>
      </XStack>
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('how-to-play')}
      >
        <Show if={appState$.tab.get() === 'how-to-play'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[64]} />
        </Show>
        <TSizableText
          zi={2}
          color={appState$.tab.get() === 'how-to-play' ? colors.background : colors.text}
        >
          How to Play
        </TSizableText>
      </XStack>
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('leaderboard')}
      >
        <Show if={appState$.tab.get() === 'leaderboard'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
        </Show>
        <TSizableText
          zi={2}
          color={appState$.tab.get() === 'leaderboard' ? colors.background : colors.text}
        >
          Leaderboard
        </TSizableText>
      </XStack>
      <XStack
        ml="auto"
        h="$3"
        w="$3"
        ai="center"
        jc="center"
        pos="relative"
        cur="pointer"
        onPress={() => appState$.tab.set('user')}
      >
        <Show if={appState$.tab.get() === 'user'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[16]} />
        </Show>
        <UserCircle2
          style={{ zIndex: 2 }}
          color={appState$.tab.get() === 'user' ? colors.background : colors.text}
        />
      </XStack>
    </XStack>
  )
})

export const HappyBirthday = () => {
  const birthday = 'McKenzie'
  if (birthday == null) return null
  return (
    <TSizableText
      pos="absolute"
      margin="auto"
      t={300}
      rotate="45deg"
      fontSize={108}
      lineHeight={200}
      textAlign="center"
      pointerEvents="none"
      opacity={0.8}
    >
      HAPPY BIRTHDAY
      <br />
      {birthday.toUpperCase()}!!1!
    </TSizableText>
  )
}

export function HomeScreen() {
  return (
    <Container>
      <Tabs />
      <StatsPersistor />
      <GameplayHoldListener />
      <PopSoundEffect />

      {/* LEFT */}
      <TopOutPanel />
      <StatsPanel />
      <HighEfficiencyPanel />
      <ActiveLeftPanel />

      {/* TOP */}
      <ActiveTopPanel />

      {/* BOARD */}
      <Board />

      {/* BOTTOM */}
      <ActiveBottomPanel />

      {/* RIGHT */}
      <ActiveRightPanel />

      {/* TABS */}
      <HowToPlayTab />
      <LeaderboardTab />
      <UserTab />
      <HappyBirthday />
    </Container>
  )
}

export default HomeScreen
