import { Memo, Show, observer } from '@legendapp/state/react'
import { ScrollView, SizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import { LeaderboardType, TileSize } from 'app/types'
import { Tile } from './tile'
import { computed, observable } from '@legendapp/state'
import { ReactNode } from 'react'
import { getMergedTileSize, getTileRadius } from 'app/tiles'
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'
import { getQueueTile } from 'app/state'
import { BaseHoldListener } from './hold-listener'
import { ArrowLeftRight, Merge } from '@tamagui/lucide-icons'
import { colors } from 'app/colors'

const leaderboard$ = observable<LeaderboardType>('score')
const leaderboardTitle$ = computed(() => {
  switch (leaderboard$.get()) {
    case 'score': return 'HIGH SCORE'
    case 'efficiency2048': return '2048 EFFICIENCY'
    case 'efficiency4096': return '4096 EFFICIENCY'
    case 'efficiency8192': return '8192 EFFICIENCY'
  }
})

const LeaderboardSelect = observer(() => {
  return (
    <XStack w="100%" jc="center" gap="$8">
      <YStack ai='center'>
        <SizableText size="$3">Points:</SizableText>
        <XStack
          h="$3"
          px="$4"
          ai="center"
          pos="relative"
          cursor="pointer"
          onPress={() => leaderboard$.set('score')}
        >
          <Show if={leaderboard$.get() === 'score'}>
            <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[2048]} />
          </Show>
          <SizableText
            zi={2}
            color={leaderboard$.get() === 'score' ? colors.background : colors.text}
          >
            Score
          </SizableText>
        </XStack>
      </YStack>
      <YStack h="100%" w={2} bg="$border" />
      <YStack ai='center'>
        <SizableText size="$3">Efficiency:</SizableText>
        <XStack gap="$4">
          <XStack
            h="$3"
            px="$4"
            ai="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('efficiency2048')}
          >
            <Show if={leaderboard$.get() === 'efficiency2048'}>
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
            </Show>
            <SizableText
              zi={2}
              color={leaderboard$.get() === 'efficiency2048' ? colors.background : colors.text}
            >
              2048
            </SizableText>
          </XStack>
          <XStack
            h="$3"
            px="$4"
            ai="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('efficiency4096')}
          >
            <Show if={leaderboard$.get() === 'efficiency4096'}>
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[16]} />
            </Show>
            <SizableText
              zi={2}
              color={leaderboard$.get() === 'efficiency4096' ? colors.background : colors.text}
            >
              4096
            </SizableText>
          </XStack>
          <XStack
            h="$3"
            px="$4"
            ai="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('efficiency8192')}
          >
            <Show if={leaderboard$.get() === 'efficiency8192'}>
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
            </Show>
            <SizableText
              zi={2}
              color={leaderboard$.get() === 'efficiency8192' ? colors.background : colors.text}
            >
              8192
            </SizableText>
          </XStack>
        </XStack>
      </YStack>
    </XStack>
  )
})
const Header = observer(() => {
  return (
    <>
      <XStack h="$4" w="100%" ai="center" jc="space-between" px="$4" pos="relative">
        <XStack fullscreen bg={colors.tile['2']} zi={-1} />
        <XStack ai="center" jc="center" gap="$4">
          <SizableText w={40}>RANK</SizableText>
          <SizableText fontWeight="bold">PLAYER</SizableText>
        </XStack>
        <SizableText fontWeight="bold"><Memo>{leaderboardTitle$}</Memo></SizableText>
      </XStack>
      <XStack w="100%" h={2} bg="$border" />
    </>
  )
})

const Row = observer(
  ({
    rank,
    name,
    score,
    highlight,
  }: {
    rank: number
    name: string
    score: string
    highlight?: boolean
  }) => {
    return (
      <XStack pos="relative" h="$4" w="100%" ai="center" jc="space-between" px="$4">
        {(highlight || rank % 2 === 0) && (
          <XStack fullscreen bg={colors.tile['2']} o={0.5} zi={-1} />
        )}
        <XStack ai="center" jc="center" gap="$4">
          <SizableText w={40}>{rank}</SizableText>
          <SizableText fontWeight="bold">{name}</SizableText>
        </XStack>
        <SizableText>{score}</SizableText>
      </XStack>
    )
  }
)
const Table = observer(() => {
  return (
    <YStack w="100%">
      <Header />
      <Row key={0} rank={1} name="NAME" score="100%" />
      <Row key={1} rank={2} name="NAME" score="100%" />
      <Row key={2} rank={3} name="NAME" score="100%" />
      <Row key={3} rank={4} name="NAME" score="100%" />
      <Row key={4} rank={5} name="NAME" score="100%" />
      <Row key={5} rank={6} name="NAME" score="100%" />
      <Row key={6} rank={7} name="NAME" score="100%" />
      <Row key={7} rank={8} name="NAME" score="100%" />
      <Row key={8} rank={9} name="NAME" score="100%" />
      <Row key={9} rank={10} name="NAME" score="100%" />
    </YStack>
  )
})

export const LeaderboardTab = observer(() => {
  if (appState$.tab.get() !== 'leaderboard') return null

  return (
    <ScrollView fullscreen mah="100%" bg="$background" ai="center" jc="flex-start" pt={64}>
      <YStack ai="flex-start" miw={450}>
        <SizableText>Select Leaderboard:</SizableText>
        <br />
        <LeaderboardSelect />
        <br />
        <SizableText>Top 10:</SizableText>
        <br />
        <Table />
        <br />
        <SizableText>Personal Record:</SizableText>
        <br />
        <Row rank={531} name="Rogue Rotkosky" score="50.65%" highlight />
      </YStack>
    </ScrollView>
  )
})
