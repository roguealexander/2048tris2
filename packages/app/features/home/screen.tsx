import { Memo, Show, observer } from '@legendapp/state/react'
import { Spacer, Stack, TSizableText, XStack, YStack, useMedia, useWindowDimensions } from '@my/ui'
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
import { ShowStatsButton } from 'app/components/show-stats-button'
import { StatsPanel } from 'app/components/stats-panel'
import { useSafeAreaFrame } from 'app/utils/useSafeAreaFrame'
import { useScale } from 'app/components/useScale'

const ActiveLeftPanel = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal
  if (vertical || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null)
    return null
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
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal
  if (vertical || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null)
    return null
  return (
    <YStack gap="$2" ai="flex-start">
      <Hold />
      <Spacer />
      <Queue />
    </YStack>
  )
})

const ActiveBottomPanel = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const scale = useScale()
  if (horizontal) return null
  return (
    <XStack gap={8 * scale} w={450 * scale} jc="space-between">
      <Hold />
      <Queue />
    </XStack>
  )
})

const ActiveTopPanel = observer(() => {
  const scale = useScale()
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  if (horizontal || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null)
    return null

  return (
    <XStack mt={-22} mb={2} zi={3} gap="$2" w={450 * scale} jc="space-between">
      <YStack>
        <TSizableText>
          Score:{' '}
          <TSizableText size="$5" fontWeight="bold">
            <Memo>{state$.score}</Memo>
          </TSizableText>
        </TSizableText>
        <TSizableText>
          Eff:{' '}
          <TSizableText size="$5" fontWeight="bold">
            <Memo>{state$.efficiency}</Memo>%
          </TSizableText>
        </TSizableText>
      </YStack>
      <XStack gap="$2">
        <ShowStatsButton w={undefined} px={6} p={scale < 0.7 ? 0 : undefined} />
        <NewGameButton w={undefined} px={6} p={scale < 0.7 ? 0 : undefined} />
      </XStack>
    </XStack>
  )
})

const XPaddingSide = 6
const XPadding = XPaddingSide * 2
const HorizontalAspectRatio = (866 + XPadding) / 820
const VerticalAspectRatio = (450 + XPadding) / 1000

const Container = observer(({ children }: { children: ReactNode }) => {
  const frame = useSafeAreaFrame()

  // Layout Dimension
  const aspectRatio = frame.width / frame.height
  const layoutDimension = aspectRatio >= HorizontalAspectRatio ? 'horizontal' : 'vertical'
  appState$.layoutDimension.set(layoutDimension)

  // HorizontalScale
  const horizontalScale = Math.min(1, frame.height / 820)

  // Vertical Scale
  const widthScale = Math.min(1, frame.width / (450 + XPadding))
  const heightScale = Math.min(1, frame.height / 1000)
  const verticalScale = Math.min(widthScale, heightScale)

  const scale = layoutDimension === 'horizontal' ? horizontalScale : verticalScale
  appState$.scale.set(scale)

  return (
    <Stack
      {...(layoutDimension === 'horizontal'
        ? {
            fd: 'row',
            gap: 64,
            ai: 'flex-start',
            jc: 'center',
          }
        : {
            fd: 'column',
            gap: '$2',
            ai: 'center',
            fc: 'flex-start',
          })}
      // miw={462}
      // w={dimensions.width}
      // maw={dimensions.width}
      f={1}
      width="100%"
      miw={462}
      pt={84}
      px="$2"
      // transform={[{ scale }]}
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
      w={appState$.layoutDimension.get() === 'horizontal' ? 866 : 450}
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
      {'\n'}
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
      {/* <HappyBirthday /> */}
    </Container>
  )
}

export default HomeScreen
