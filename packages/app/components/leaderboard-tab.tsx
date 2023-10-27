import { Memo, Show, observer } from '@legendapp/state/react'
import { TSizableText, XStack, YStack } from '@my/ui'
import { LeaderboardType } from 'app/types'
import { computed, observable } from '@legendapp/state'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'

const leaderboard$ = observable<LeaderboardType>('scoreHigh')
const leaderboardTitle$ = computed(() => {
  switch (leaderboard$.get()) {
    case 'scoreHigh':
      return 'HIGH SCORE'
    case 'scoreLow':
      return 'LOW SCORE'
    case 'efficiency2048':
      return '2048 EFFICIENCY'
    case 'efficiency4096':
      return '4096 EFFICIENCY'
    case 'efficiency8192':
      return '8192 EFFICIENCY'
  }
})

const LeaderboardSelect = observer(() => {
  return (
    <XStack w="100%" jc="center" gap="$4">
      <YStack ai="center">
        <TSizableText size="$3">Score:</TSizableText>
        <XStack gap="$2">
          <XStack
            h="$3"
            px="$4"
            ai="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('scoreHigh')}
          >
            <Show if={leaderboard$.get() === 'scoreHigh'}>
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile['2048']} />
            </Show>
            <TSizableText
              zi={2}
              color={leaderboard$.get() === 'scoreHigh' ? colors.background : colors.text}
            >
              High
            </TSizableText>
          </XStack>
          <XStack
            h="$3"
            px="$4"
            ai="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('scoreLow')}
          >
            <Show if={leaderboard$.get() === 'scoreLow'}>
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile['4096']} />
            </Show>
            <TSizableText
              zi={2}
              color={leaderboard$.get() === 'scoreLow' ? colors.background : colors.text}
            >
              Low
            </TSizableText>
          </XStack>
        </XStack>
      </YStack>
      <YStack h="100%" w={2} bg="$border" />
      <YStack ai="center">
        <TSizableText size="$3">Efficiency:</TSizableText>
        <XStack gap="$2">
          <XStack
            h="$3"
            px="$4"
            ai="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('efficiency2048')}
          >
            <Show if={leaderboard$.get() === 'efficiency2048'}>
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[64]} />
            </Show>
            <TSizableText
              zi={2}
              color={leaderboard$.get() === 'efficiency2048' ? colors.background : colors.text}
            >
              2048
            </TSizableText>
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
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
            </Show>
            <TSizableText
              zi={2}
              color={leaderboard$.get() === 'efficiency4096' ? colors.background : colors.text}
            >
              4096
            </TSizableText>
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
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[16]} />
            </Show>
            <TSizableText
              zi={2}
              color={leaderboard$.get() === 'efficiency8192' ? colors.background : colors.text}
            >
              8192
            </TSizableText>
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
          <TSizableText w={40}>RANK</TSizableText>
          <TSizableText fontWeight="bold">PLAYER</TSizableText>
        </XStack>
        <TSizableText fontWeight="bold">
          <Memo>{leaderboardTitle$}</Memo>
        </TSizableText>
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
          <TSizableText w={40}>{rank}</TSizableText>
          <TSizableText fontWeight="bold">{name}</TSizableText>
        </XStack>
        <TSizableText>{score}</TSizableText>
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
  return (
    <TabContainer tab="leaderboard">
      <TSizableText>Select Leaderboard:</TSizableText>
      <br />
      <LeaderboardSelect />
      <br />
      <TSizableText>Top 10:</TSizableText>
      <br />
      <Table />
      <br />
      <TSizableText>Personal Record:</TSizableText>
      <br />
      <Row rank={531} name="Rogue Rotkosky" score="50.65%" highlight />
    </TabContainer>
  )
})
