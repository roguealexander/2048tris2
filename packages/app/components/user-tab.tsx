import { Memo, observer, useObservable } from '@legendapp/state/react'
import { Spinner, TButton, TSizableText, XStack, YStack } from '@my/ui'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'
import { useUser } from 'app/utils/useUser'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { AuthComponent } from 'app/features/auth/auth-component'
import { stats$, statsActions$ } from 'app/statsState'
import { User } from '@supabase/supabase-js'
import { api } from 'app/utils/api'

const Header = observer(() => {
  return (
    <>
      <XStack h="$4" w="100%" ai="center" jc="space-between" px="$4" pos="relative">
        <XStack fullscreen bg={colors.tile['2']} zi={-1} />
        <TSizableText fontWeight="bold">LEADERBOARD</TSizableText>
        <XStack ai="center" jc="center" gap="$4">
          <TSizableText fontWeight="bold">RANK</TSizableText>
          <TSizableText fontWeight="bold" textAlign="right" w={80}>
            SCORE
          </TSizableText>
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
    rank: number | undefined
    score: string
    highlight?: boolean
  }) => {
    return (
      <XStack pos="relative" h="$4" w="100%" ai="center" jc="space-between" px="$4">
        <XStack fullscreen bg={colors.tile['2']} o={highlight ? 0.6 : 0.4} zi={-1} />
        <TSizableText>{leaderboard}</TSizableText>
        <XStack ai="center" jc="center" gap="$4">
          <TSizableText>{rank}</TSizableText>
          <TSizableText w={80} textAlign="right">
            {score}
          </TSizableText>
        </XStack>
      </XStack>
    )
  }
)

const LeaderboardStatsTable = observer(() => {
  const { data: leaderboards } = api.tris.getUserLeaderboards.useQuery()

  return (
    <YStack w="100%" pl="$2">
      <Header />
      <br />
      <TSizableText size="$3">POINTS:</TSizableText>
      <Row
        key={0}
        rank={leaderboards?.scoreHigh?.rank}
        leaderboard="HIGH SCORE"
        score={
          leaderboards?.scoreHigh?.scoreHigh === 0 ? '--' : `${leaderboards?.scoreHigh?.scoreHigh}`
        }
      />
      <Row
        key={1}
        rank={leaderboards?.scoreLow?.rank}
        leaderboard="LOW SCORE"
        score={
          leaderboards?.scoreLow?.scoreLow === 100000 ? '--' : `${leaderboards?.scoreLow?.scoreLow}`
        }
        highlight
      />
      <br />
      <TSizableText size="$3">EFFICIENCY:</TSizableText>
      <Row
        key={2}
        rank={leaderboards?.efficiency2048?.rank}
        leaderboard="2048 EFFICIENCY"
        score={
          leaderboards?.efficiency2048?.efficiency2048 === 0
            ? '--'
            : `${leaderboards?.efficiency2048?.efficiency2048}%`
        }
      />
      <Row
        key={3}
        rank={leaderboards?.efficiency4096?.rank}
        leaderboard="4096 EFFICIENCY"
        score={
          leaderboards?.efficiency4096?.efficiency4096 === 0
            ? '--'
            : `${leaderboards?.efficiency4096?.efficiency4096}%`
        }
        highlight
      />
      <Row
        key={4}
        rank={leaderboards?.efficiency8192?.rank}
        leaderboard="8192 EFFICIENCY"
        score={
          leaderboards?.efficiency8192?.efficiency8192 === 0
            ? '--'
            : `${leaderboards?.efficiency8192?.efficiency8192}%`
        }
      />
    </YStack>
  )
})

const ResetStatsButton = observer(() => {
  const resetting = useObservable<boolean>(false)
  const resetStatsMutation = api.tris.resetUserStats.useMutation()

  const resetStats = async () => {
    resetting.set(true)
    await resetStatsMutation.mutateAsync()
    statsActions$.resetStats()
    resetting.set(false)
  }
  return (
    <TButton ml="$2" onPress={resetStats}>
      RESET USER STATS
      {resetting.get() && <Spinner color="$background" />}
    </TButton>
  )
})

const SignOutButton = observer(() => {
  const supabase = useSupabase()
  const signOut = async () => {
    await supabase.auth.signOut()
    statsActions$.resetStats()
  }
  return (
    <TButton ml="$2" onPress={signOut}>
      SIGN OUT
    </TButton>
  )
})

const AuthedUser = observer(({ user }: { user: User }) => {
  const userName = user.user_metadata['name']
  return (
    <TSizableText>
      Signed in User:{' '}
      <TSizableText size="$5" fontWeight="bold">
        {userName}
      </TSizableText>
    </TSizableText>
  )
})

export const UserTab = observer(() => {
  const { user } = useUser()
  return (
    <TabContainer tab="user">
      <br />
      {user == null && (
        <>
          <AuthComponent />
          <br />
          <br />
          <XStack w="100%" h={2} bg="$border" />
          <br />
          <br />
        </>
      )}

      {user != null && (
        <>
          <AuthedUser user={user} />
          <br />
        </>
      )}
      <TSizableText>
        Games Played:{' '}
        <TSizableText size="$5" fontWeight="bold">
          <Memo>{stats$.gamesPlayed}</Memo>
        </TSizableText>
      </TSizableText>
      <TSizableText>
        Tiles Dropped:{' '}
        <TSizableText size="$5" fontWeight="bold">
          <Memo>{stats$.ballsDropped}</Memo>
        </TSizableText>
      </TSizableText>
      <br />
      <br />

      <XStack w="100%" h={2} bg="$border" />
      <br />
      <br />

      <TSizableText>
        User{' '}
        <TSizableText textDecorationLine={user == null ? 'line-through' : undefined}>
          Leaderboard
        </TSizableText>{' '}
        Stats:
      </TSizableText>
      <br />
      <LeaderboardStatsTable />
      <br />
      <br />

      <XStack w="100%" h={2} bg="$border" />
      <br />
      <br />

      <TSizableText>Reset Stats:</TSizableText>
      <br />
      <ResetStatsButton />

      {user != null && (
        <>
          <br />
          <br />
          <TSizableText>Sign Out:</TSizableText>
          <br />
          <SignOutButton />
        </>
      )}
    </TabContainer>
  )
})
