import { Memo, observer, useObservable } from '@legendapp/state/react'
import { Slider, Spacer, Spinner, TButton, TSizableText, XStack, YStack } from '@my/ui'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'
import { useUser } from 'app/utils/useUser'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { AuthComponent } from 'app/features/auth/auth-component'
import { DefaultBestTime, DefaultLowScore, stats$, statsActions$ } from 'app/statsState'
import { User } from '@supabase/supabase-js'
import { api } from 'app/utils/api'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { appState$ } from 'app/appState'
import { batch } from '@legendapp/state'
import { getMinutesAndSeconds } from 'app/utils/time'

const Header = observer(() => {
  const scale = appState$.scale.get()
  return (
    <>
      <XStack h="$4" w="100%" ai="center" jc="space-between" px={18 * scale} pos="relative">
        <XStack fullscreen bg={colors.tile['2']} zi={-1} />
        <TSizableText size="$1" fontWeight="bold">
          LEADERBOARD
        </TSizableText>
        <XStack ai="center" jc="center" gap={18 * scale}>
          <TSizableText size="$1" fontWeight="bold">
            RANK
          </TSizableText>
          <TSizableText size="$1" fontWeight="bold" textAlign="right" w={80 * scale}>
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
  const { user } = useUser()
  const { data: leaderboards } = api.tris.getUserLeaderboards.useQuery()
  const scoreHigh = stats$.scoreHigh.get()
  const scoreLow = stats$.scoreLow.get()
  const efficiency2048 = stats$.efficiency2048.get()
  const efficiency4096 = stats$.efficiency4096.get()
  const efficiency8192 = stats$.efficiency8192.get()
  const bestTime2048 = stats$.bestTime2048.get()
  const bestTime4096 = stats$.bestTime4096.get()
  const bestTime8192 = stats$.bestTime8192.get()

  return (
    <YStack w="100%" pl="$2">
      <Header />
      <Spacer />
      <TSizableText size="$3">POINTS:</TSizableText>
      <Row
        key={0}
        rank={user == null ? undefined : leaderboards?.scoreHigh?.rank}
        leaderboard="HIGH SCORE"
        score={scoreHigh === 0 ? '--' : `${scoreHigh}`}
      />
      <Row
        key={1}
        rank={user == null ? undefined : leaderboards?.scoreLow?.rank}
        leaderboard="LOW SCORE"
        score={scoreLow === DefaultLowScore ? '--' : `${scoreLow}`}
        highlight
      />
      <Spacer />
      <TSizableText size="$3">EFFICIENCY:</TSizableText>
      <Row
        key={2}
        rank={user == null ? undefined : leaderboards?.efficiency2048?.rank}
        leaderboard="2048 EFFICIENCY"
        score={efficiency2048 === 0 ? '--' : `${efficiency2048}%`}
      />
      <Row
        key={3}
        rank={user == null ? undefined : leaderboards?.efficiency4096?.rank}
        leaderboard="4096 EFFICIENCY"
        score={efficiency4096 === 0 ? '--' : `${efficiency4096}%`}
        highlight
      />
      <Row
        key={4}
        rank={user == null ? undefined : leaderboards?.efficiency8192?.rank}
        leaderboard="8192 EFFICIENCY"
        score={efficiency8192 === 0 ? '--' : `${efficiency8192}%`}
      />
      <Spacer />
      <TSizableText size="$3">BEST TIME:</TSizableText>
      <Row
        key={5}
        rank={user == null ? undefined : leaderboards?.bestTime2048?.rank}
        leaderboard="2048 BEST TIME"
        score={bestTime2048 === DefaultBestTime ? '--' : `${getMinutesAndSeconds(bestTime2048)}`}
      />
      <Row
        key={6}
        rank={user == null ? undefined : leaderboards?.bestTime4096?.rank}
        leaderboard="4096 BEST TIME"
        score={bestTime4096 === DefaultBestTime ? '--' : `${getMinutesAndSeconds(bestTime4096)}`}
        highlight
      />
      <Row
        key={7}
        rank={user == null ? undefined : leaderboards?.bestTime8192?.rank}
        leaderboard="8192 BEST TIME"
        score={bestTime8192 === DefaultBestTime ? '--' : `${getMinutesAndSeconds(bestTime8192)}`}
      />
    </YStack>
  )
})

const ResetStatsButton = observer(() => {
  const resetting = useObservable<boolean>(false)
  const resetStatsMutation = api.tris.resetUserStats.useMutation()

  const resetStats = async () => {
    resetting.set(true)
    await resetStatsMutation.mutateAsync().catch((error) => {
      console.log('ERROR RESETTING STATS', error)
    })
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

const SettingsSection = observer(() => {
  const scale = appState$.scale.get()
  return (
    <XStack w="100%" jc="space-between" ai="center">
      <TSizableText>Volume:</TSizableText>
      <Slider
        defaultValue={[appState$.volume.peek()]}
        max={1}
        step={0.01}
        mx={-18}
        w={300 * scale}
        onValueChange={(val) => appState$.volume.set(val[0] != null ? val[0] : 0.5)}
      >
        <Slider.Track h={8} bg="$border" br={0} mx={18} w={300 * scale - 44} />
        <Slider.Thumb
          index={0}
          width={44}
          h={44}
          bw={0}
          bg="transparent"
          hoverStyle={{ bg: 'transparent' }}
          focusStyle={{ bg: 'transparent' }}
          ai="center"
          jc="center"
        >
          <XStack w={8} h={36} bg="$text" />
        </Slider.Thumb>
      </Slider>
    </XStack>
  )
})

export const UserTab = observer(() => {
  const { user, session } = useUser()
  return (
    <TabContainer tab="user">
      {appState$.backTab.get() != null && (
        <XStack
          cur="pointer"
          ml={-12}
          w={40}
          h={40}
          p={0}
          mt={-22}
          mb={22}
          ai="center"
          jc="center"
          onPress={() => {
            batch(() => {
              appState$.tab.set(appState$.backTab.peek())
              appState$.backTab.set(null)
            })
          }}
        >
          <ChevronLeft color="$text" />
        </XStack>
      )}
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
        Games Finished:{' '}
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

      {/* SETTINGS */}
      <Spacer />
      <Spacer />
      <XStack w="100%" h={2} bg="$border" />
      <Spacer />
      <Spacer />
      <SettingsSection />
    </TabContainer>
  )
})
