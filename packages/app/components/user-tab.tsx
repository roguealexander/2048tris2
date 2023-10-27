import { observer } from '@legendapp/state/react'
import { TButton, TSizableText, XStack, YStack } from '@my/ui'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'
import { useUser } from 'app/utils/useUser'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { AuthComponent } from 'app/features/auth/auth-component'

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
    rank: number
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
  return (
    <YStack w="100%">
      <Header />
      <br />
      <TSizableText size="$3">POINTS:</TSizableText>
      <Row key={0} rank={1} leaderboard="HIGH SCORE" score="100%" />
      <Row key={1} rank={2} leaderboard="LOW SCORE" score="100%" highlight />
      <br />
      <TSizableText size="$3">EFFICIENCY:</TSizableText>
      <Row key={2} rank={3} leaderboard="2048 EFFICIENCY" score="100%" />
      <Row key={3} rank={4} leaderboard="4096 EFFICIENCY" score="100%" highlight />
      <Row key={4} rank={5} leaderboard="8192 EFFICIENCY" score="100%" />
    </YStack>
  )
})

const ResetStatsButton = observer(() => {
  return <TButton onPress={() => console.log('reset stats')}>RESET USER STATS</TButton>
})

const SignOutButton = observer(() => {
  const supabase = useSupabase()
  const signOut = async () => {
    await supabase.auth.signOut()
  }
  return <TButton onPress={signOut}>SIGN OUT</TButton>
})

export const UserTab = observer(() => {
  const { user, isLoading } = useUser()
  console.log({
    user,
  })
  return (
    <TabContainer tab="user">
      <TSizableText>User Leaderboard Stats:</TSizableText>
      <br />
      {user == null ? <AuthComponent /> : <LeaderboardStatsTable />}
      <br />
      <br />
      <TSizableText>Reset Stats:</TSizableText>
      <br />
      <ResetStatsButton />
      {user != null && (
        <>
          <br />
          <br />
          <TSizableText>Log Out:</TSizableText>
          <br />
          <SignOutButton />
        </>
      )}
    </TabContainer>
  )
})
