import { Memo, Show, observer } from '@legendapp/state/react'
import { Stack, TSizableText, XStack, YStack } from '@my/ui'
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
import { HelpCircle, Table, UserCircle2 } from '@tamagui/lucide-icons'
import { colors } from 'app/colors'
import { ShowStatsButton } from 'app/components/show-stats-button'
import { StatsPanel } from 'app/components/stats-panel'
import { useSafeAreaFrame } from 'app/utils/useSafeAreaFrame'

const ActiveLeftPanel = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal
  const scale = appState$.scale.get()

  if (vertical || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null)
    return null

  return (
    <YStack w={144 * scale} gap={16 * scale} mt={23}>
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
  const scale = appState$.scale.get()

  if (vertical || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null)
    return null

  return (
    <YStack gap={8 * scale} ai="flex-start">
      <Hold />
      <Queue />
    </YStack>
  )
})

const ActiveBottomPanel = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const scale = appState$.scale.get()
  if (horizontal) return null
  return (
    <XStack gap={8 * scale} w={450 * scale} jc="space-between">
      <Hold />
      <Queue />
    </XStack>
  )
})

const ActiveTopPanel = observer(() => {
  const scale = appState$.scale.get()
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  if (horizontal || state$.toppedOut.get() || state$.activeHighEfficiencyPanel.get() != null)
    return null

  return (
    <XStack mt={-32} mb={-8} zi={3} gap="$2" w={450 * scale} jc="space-between" ai="center">
      <YStack>
        <TSizableText size="$2">
          Score:{' '}
          <TSizableText size="$4" fontWeight="bold">
            <Memo>{state$.score}</Memo>
          </TSizableText>
        </TSizableText>
        <TSizableText size="$2" mt={-4}>
          Eff.:{' '}
          <TSizableText size="$4" fontWeight="bold">
            <Memo>{state$.efficiency}</Memo>%
          </TSizableText>
        </TSizableText>
      </YStack>
      <XStack gap="$2">
        <ShowStatsButton w={undefined} h="$2.5" />
        <NewGameButton w={undefined} h="$2.5" />
      </XStack>
    </XStack>
  )
})

const XPaddingSide = 6
const XPadding = XPaddingSide * 2
const HorizontalAspectRatio = (866 + XPadding) / 820

const HorizontalFixedHeights = {
  header: 44,
  boardTopPadding: 44,
  boardTopMargin: 24,
}
const HorizontalFixedHeightsTotal = Object.values(HorizontalFixedHeights).reduce(
  (acc, h) => acc + h,
  0
)
const HorizontalScalingHeights = {
  board: 700,
}
const HorizontalScalingHeightsTotal = Object.values(HorizontalScalingHeights).reduce(
  (acc, h) => acc + h,
  0
)
const HorizontalHeightsTotal = HorizontalFixedHeightsTotal + HorizontalScalingHeightsTotal

const VerticalFixedHeights = {
  header: 44,
  topPanel: 40,
  boardTopMargin: 24,
  bottomPanelText: 22,
  bottomPadding: 12,
}
const VerticalFixedHeightsTotal = Object.values(VerticalFixedHeights).reduce((acc, h) => acc + h, 0)
const VerticalScalingHeights = {
  board: 700,
  bottomGap: 8,
  bottomPanel: 104,
}
const VerticalScalingHeightsTotal = Object.values(VerticalScalingHeights).reduce(
  (acc, h) => acc + h,
  0
)
const VerticalHeightsTotal = VerticalFixedHeightsTotal + VerticalScalingHeightsTotal

const Container = observer(({ children }: { children: ReactNode }) => {
  const frame = useSafeAreaFrame()

  // Layout Dimension
  const aspectRatio = frame.width / frame.height
  const layoutDimension = aspectRatio >= HorizontalAspectRatio ? 'horizontal' : 'vertical'
  appState$.layoutDimension.set(layoutDimension)

  // HorizontalScale
  const horizontalScale = Math.min(
    1,
    (frame.height - HorizontalFixedHeightsTotal) /
      (HorizontalHeightsTotal - HorizontalFixedHeightsTotal)
  )

  // Vertical Scale
  const widthScale = Math.min(1, frame.width / (450 + XPadding))
  const heightScale = Math.min(
    1,
    (frame.height - VerticalFixedHeightsTotal) / (VerticalHeightsTotal - VerticalFixedHeightsTotal)
  )
  const verticalScale = Math.min(widthScale, heightScale)

  const scale = layoutDimension === 'horizontal' ? horizontalScale : verticalScale
  appState$.scale.set(scale)

  return (
    <Stack
      {...(layoutDimension === 'horizontal'
        ? {
            fd: 'row',
            gap: 64 * scale,
            ai: 'flex-start',
            jc: 'center',
          }
        : {
            fd: 'column',
            gap: 8 * scale,
            ai: 'center',
            fc: 'flex-start',
          })}
      // miw={462}
      // w={dimensions.width}
      // maw={dimensions.width}
      f={1}
      width="100%"
      miw={462 * scale}
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
  const scale = appState$.scale.get()
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const tab = appState$.tab.get()

  return (
    <XStack
      zi={10}
      h="$4"
      f={1}
      w={(appState$.layoutDimension.get() === 'horizontal' ? 866 : 450) * scale}
      flexWrap="wrap"
      ai="center"
      jc="space-between"
      pos="absolute"
      t={0}
    >
      <XStack fullscreen o={0.9} bg="$background" />
      <XStack>
        <XStack
          h="$3"
          px={8}
          ai="center"
          pos="relative"
          cursor="pointer"
          onPress={() => appState$.tab.set('2048tris')}
        >
          <Show if={tab === '2048tris'}>
            <XStack fullscreen h="$3" bg={colors.tile[2048]} />
          </Show>
          <TSizableText
            size="$5"
            zi={2}
            color={tab === '2048tris' ? colors.background : colors.text}
          >
            2048tris
          </TSizableText>
        </XStack>
        <XStack
          h="$3"
          px={horizontal ? 8 : 16}
          ai="center"
          pos="relative"
          cursor="pointer"
          onPress={() => appState$.tab.set('how-to-play')}
        >
          <Show if={tab === 'how-to-play'}>
            <XStack fullscreen h="$3" bg={colors.tile[64]} />
          </Show>
          {horizontal ? (
            <TSizableText zi={2} color={tab === 'how-to-play' ? colors.background : colors.text}>
              How to Play
            </TSizableText>
          ) : (
            <HelpCircle
              style={{ zIndex: 2 }}
              size={20}
              color={tab === 'how-to-play' ? colors.background : colors.text}
            />
          )}
        </XStack>
        <XStack
          h="$3"
          px={horizontal ? 8 : 16}
          ai="center"
          pos="relative"
          cursor="pointer"
          onPress={() => appState$.tab.set('leaderboard')}
        >
          <Show if={tab === 'leaderboard'}>
            <XStack fullscreen h="$3" bg={colors.tile[32]} zi={0} />
          </Show>
          {horizontal ? (
            <TSizableText zi={2} color={tab === 'leaderboard' ? colors.background : colors.text}>
              Leaderboard
            </TSizableText>
          ) : (
            <Table
              style={{ zIndex: 2 }}
              size={20}
              color={tab === 'leaderboard' ? colors.background : colors.text}
            />
          )}
        </XStack>
      </XStack>

      <XStack
        h="$3"
        w="$3"
        ai="center"
        jc="center"
        pos="relative"
        cur="pointer"
        onPress={() => appState$.tab.set('user')}
      >
        <Show if={tab === 'user'}>
          <XStack fullscreen h="$3" bg={colors.tile[16]} />
        </Show>
        <UserCircle2
          style={{ zIndex: 2 }}
          color={tab === 'user' ? colors.background : colors.text}
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
