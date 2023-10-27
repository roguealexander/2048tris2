import { Memo, Show, observer } from '@legendapp/state/react'
import { Button, ScrollView, SizableText, XStack, YStack } from '@my/ui'
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
import { TabContainer } from './tab-container'
import { useUser } from 'app/utils/useUser'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { AuthComponent } from 'app/features/auth/auth-component'

const leaderboard$ = observable<LeaderboardType>('score')
const leaderboardTitle$ = computed(() => {
  switch (leaderboard$.get()) {
    case 'score':
      return 'HIGH SCORE'
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
    <XStack w="100%" jc="center" gap="$8">
      <YStack ai="center">
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
      <YStack ai="center">
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
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[64]} />
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
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
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
              <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[16]} />
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
        <SizableText fontWeight="bold">LEADERBOARD</SizableText>
        <XStack ai="center" jc="center" gap="$4">
          <SizableText fontWeight="bold">RANK</SizableText>
          <SizableText fontWeight="bold" textAlign="right" w={80}>
            SCORE
          </SizableText>
        </XStack>
      </XStack>
      <XStack w="100%" h={2} bg="$border" />
    </>
  )
})

const Row = observer(
  ({
    leaderboard,
    rank,
    score,
    highlight,
  }: {
    leaderboard: string
    rank: number
    score: string
    highlight?: boolean
  }) => {
    return (
      <XStack pos="relative" h="$4" w="100%" ai="center" jc="space-between" px="$4">
        <XStack fullscreen bg={colors.tile['2']} o={highlight ? 0.6 : 0.4} zi={-1} />
        <SizableText>{leaderboard}</SizableText>
        <XStack ai="center" jc="center" gap="$4">
          <SizableText>{rank}</SizableText>
          <SizableText w={80} textAlign="right">
            {score}
          </SizableText>
        </XStack>
      </XStack>
    )
  }
)
const LeaderboardStatsTable = observer(() => {
  return (
    <YStack w="100%">
      <Header />
      <br />
      <SizableText size="$3">POINTS:</SizableText>
      <Row key={0} rank={1} leaderboard="HIGH SCORE" score="100%" />
      <Row key={1} rank={2} leaderboard="LOW SCORE" score="100%" highlight />
      <br />
      <SizableText size="$3">EFFICIENCY:</SizableText>
      <Row key={2} rank={3} leaderboard="2048 EFFICIENCY" score="100%" />
      <Row key={3} rank={4} leaderboard="4096 EFFICIENCY" score="100%" highlight />
      <Row key={4} rank={5} leaderboard="8192 EFFICIENCY" score="100%" />
    </YStack>
  )
})

const ResetStatsButton = observer(() => {
  return <Button onPress={() => console.log('reset stats')}>RESET USER STATS</Button>
})

const SignOutButton = observer(() => {
  const supabase = useSupabase()
  const signOut = async () => {
    await supabase.auth.signOut()
  }
  return <Button onPress={signOut}>SIGN OUT</Button>
})

export const UserTab = observer(() => {
  const { user, isLoading } = useUser()
  console.log({
    user,
  })
  return (
    <TabContainer tab="user">
      <SizableText>User Leaderboard Stats:</SizableText>
      <br />
      {user == null ? <AuthComponent /> : <LeaderboardStatsTable />}
      <br />
      <br />
      <SizableText>Reset Stats:</SizableText>
      <br />
      <ResetStatsButton />
      {user != null && (
        <>
          <br />
          <br />
          <SizableText>Log Out:</SizableText>
          <br />
          <SignOutButton />
        </>
      )}
    </TabContainer>
  )
})
