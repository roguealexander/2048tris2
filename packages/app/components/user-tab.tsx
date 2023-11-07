import { Memo, observer, useObservable } from '@legendapp/state/react'
import { Spacer, Spinner, TButton, TSizableText, XStack, YStack } from '@my/ui'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'
import { useUser } from 'app/utils/useUser'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { AuthComponent } from 'app/features/auth/auth-component'
import { stats$, statsActions$ } from 'app/statsState'
import { User } from '@supabase/supabase-js'
import { api } from 'app/utils/api'
import { appState$ } from 'app/appState'

const Header = observer(() => {
  const scale = appState$.scale.get()
  return (
    <>
      <XStack h="$4" w="100%" ai="center" jc="space-between" px={18 * scale} pos="relative">
        <XStack fullscreen bg={colors.tile['2']} zi={-1} />
        <TSizableText fontWeight="bold">LEADERBOARD</TSizableText>
        <XStack ai="center" jc="center" gap={18 * scale}>
          <TSizableText fontWeight="bold">RANK</TSizableText>
          <TSizableText fontWeight="bold" textAlign="right" w={80 * scale}>
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
    const scale = appState$.scale.get()
    return (
      <XStack pos="relative" h="$3" w="100%" ai="center" jc="space-between" px={18 * scale}>
        <XStack fullscreen bg={colors.tile['2']} o={highlight ? 0.6 : 0.4} zi={-1} />
        <TSizableText>{leaderboard}</TSizableText>
        <XStack ai="center" jc="center" gap={18 * scale}>
          <TSizableText>{score === '--' || rank == null ? '--' : rank}</TSizableText>
          <TSizableText w={80 * scale} textAlign="right">
            {score}
          </TSizableText>
        </XStack>
      </XStack>
    )
  }
)

const LeaderboardStatsTable = observer(() => {
  const { data: leaderboards } = api.tris.getUserLeaderboards.useQuery()
  const scoreHigh = stats$.scoreHigh.get()
  const scoreLow = stats$.scoreLow.get()
  const efficiency2048 = stats$.efficiency2048.get()
  const efficiency4096 = stats$.efficiency4096.get()
  const efficiency8192 = stats$.efficiency8192.get()

  return (
    <YStack w="100%" pl="$2">
      <Header />
      <Spacer />
      <TSizableText size="$3">POINTS:</TSizableText>
      <Row
        key={0}
        rank={leaderboards?.scoreHigh?.rank}
        leaderboard="HIGH SCORE"
        score={scoreHigh === 0 ? '--' : `${scoreHigh}`}
      />
      <Row
        key={1}
        rank={leaderboards?.scoreLow?.rank}
        leaderboard="LOW SCORE"
        score={scoreLow === 100000 ? '--' : `${scoreLow}`}
        highlight
      />
      <Spacer />
      <TSizableText size="$3">EFFICIENCY:</TSizableText>
      <Row
        key={2}
        rank={leaderboards?.efficiency2048?.rank}
        leaderboard="2048 EFFICIENCY"
        score={efficiency2048 === 0 ? '--' : `${efficiency2048}%`}
      />
      <Row
        key={3}
        rank={leaderboards?.efficiency4096?.rank}
        leaderboard="4096 EFFICIENCY"
        score={efficiency4096 === 0 ? '--' : `${efficiency4096}%`}
        highlight
      />
      <Row
        key={4}
        rank={leaderboards?.efficiency8192?.rank}
        leaderboard="8192 EFFICIENCY"
        score={efficiency8192 === 0 ? '--' : `${efficiency8192}%`}
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
  const utils = api.useContext()
  const signOut = async () => {
    await supabase.auth.signOut()
    utils.invalidate()
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
      <Spacer />
      {user == null && (
        <>
          <AuthComponent />
          <Spacer />
          <Spacer />
          <XStack w="100%" h={2} bg="$border" />
          <Spacer />
          <Spacer />
        </>
      )}

      {user != null && (
        <>
          <AuthedUser user={user} />
          <Spacer />
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
      <Spacer />
      <Spacer />

      <XStack w="100%" h={2} bg="$border" />
      <Spacer />
      <Spacer />

      <TSizableText>
        User{' '}
        <TSizableText textDecorationLine={user == null ? 'line-through' : undefined}>
          Leaderboard
        </TSizableText>{' '}
        Stats:
      </TSizableText>
      <Spacer />
      <LeaderboardStatsTable />
      <Spacer />
      <Spacer />

      <XStack w="100%" h={2} bg="$border" />
      <Spacer />
      <Spacer />

      <TSizableText>Reset Stats:</TSizableText>
      <Spacer />
      <ResetStatsButton />

      {user != null && (
        <>
          <Spacer />
          <Spacer />
          <TSizableText>Sign Out:</TSizableText>
          <Spacer />
          <SignOutButton />
        </>
      )}
    </TabContainer>
  )
})
