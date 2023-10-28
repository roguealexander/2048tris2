import { Memo, Show, observer } from '@legendapp/state/react'
import { Spinner, TSizableText, XStack, YStack } from '@my/ui'
import { LeaderboardType } from 'app/types'
import { computed, observable } from '@legendapp/state'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'
import { api } from 'app/utils/api'
import { RouterOutputs } from '@my/api'
import { stats$ } from 'app/statsState'
import { useUser } from 'app/utils/useUser'

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
    name: string | null | undefined
    score: string | null | undefined
    highlight?: boolean
  }) => {
    return (
      <XStack pos="relative" h="$4" w="100%" ai="center" jc="space-between" px="$4">
        {(highlight || rank % 2 === 0) && (
          <XStack fullscreen bg={colors.tile['2']} o={0.5} zi={-1} />
        )}
        <XStack ai="center" jc="center" gap="$4">
          <TSizableText w={40}>{name == null ? '' : rank + 1}</TSizableText>
          <TSizableText fontWeight="bold">{name}</TSizableText>
        </XStack>
        <TSizableText>{score ?? ' '}</TSizableText>
      </XStack>
    )
  }
)

type LeaderboardQueryData = RouterOutputs['tris']['getLeaderboard']

const Leaderboard = observer(() => {
  const leaderboardType = leaderboard$.get()
  switch (leaderboardType) {
    case 'scoreHigh':
      return <ScoreHighLeaderboard />
    case 'scoreLow':
      return <ScoreLowLeaderboard />
    case 'efficiency2048':
      return <Efficiency2048Leaderboard />
    case 'efficiency4096':
      return <Efficiency4096Leaderboard />
    case 'efficiency8192':
      return <Efficiency8192Leaderboard />
  }
})

const ScoreHighLeaderboard = observer(() => {
  const { data, isLoading } = api.tris.getHighScoreLeaderboard.useQuery()
  return <Table data={data} isLoading={isLoading} />
})
const ScoreLowLeaderboard = observer(() => {
  const { data, isLoading } = api.tris.getLowScoreLeaderboard.useQuery()
  return <Table data={data} isLoading={isLoading} />
})
const Efficiency2048Leaderboard = observer(() => {
  const { data, isLoading } = api.tris.getEfficiency2048Leaderboard.useQuery()
  return <Table data={data} isLoading={isLoading} />
})
const Efficiency4096Leaderboard = observer(() => {
  const { data, isLoading } = api.tris.getEfficiency4096Leaderboard.useQuery()
  return <Table data={data} isLoading={isLoading} />
})
const Efficiency8192Leaderboard = observer(() => {
  const { data, isLoading } = api.tris.getEfficiency8192Leaderboard.useQuery()
  return <Table data={data} isLoading={isLoading} />
})

const extractRows = (type: LeaderboardType, data: LeaderboardQueryData | undefined) => {
  if (data == null) return []
  return data.filter((row) => filterRow(type, row)).map((row) => extractRowData(type, row))
}
const filterRow = (type: LeaderboardType, row: LeaderboardQueryData[0]): boolean => {
  const value = (row as any)[type] as number
  return filterValue(type, value)
}
const filterValue = (type: LeaderboardType, value: number): boolean => {
  switch (type) {
    case 'scoreHigh':
    case 'efficiency2048':
    case 'efficiency4096':
    case 'efficiency8192':
      return value !== 0
    case 'scoreLow':
      return value !== 100000
  }
}
const extractRowData = (
  type: LeaderboardType,
  row: LeaderboardQueryData[0]
): { id: string; name: string; value: string } => {
  return {
    id: row.id,
    name: row.name,
    value: extractRowValue(type, row),
  }
}
const extractRowValue = (type: LeaderboardType, row: LeaderboardQueryData[0]): string => {
  const value = (row as any)[type] as number
  return rowValueString(type, value)
}
const rowValueString = (type: LeaderboardType, value: number): string => {
  switch (type) {
    case 'scoreHigh':
    case 'scoreLow':
      return `${value}`
    case 'efficiency2048':
    case 'efficiency4096':
    case 'efficiency8192':
      return `${value}%`
  }
}

const Table = observer(
  ({ data, isLoading }: { data: LeaderboardQueryData | undefined; isLoading: boolean }) => {
    const values = extractRows(leaderboard$.get(), data)
    return (
      <YStack w="100%" pos="relative" ai="center" jc="center">
        <Header />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((rank) => {
          return (
            <Row key={rank} rank={rank} name={values[rank]?.name} score={values[rank]?.value} />
          )
        })}
        {isLoading && (
          <>
            <XStack fullscreen bg="$background" o={0.5} />
            <Spinner color="$text" pos="absolute" />
          </>
        )}
      </YStack>
    )
  }
)

const PersonalRecordRow = observer(() => {
  const { user } = useUser()
  const leaderboardType = leaderboard$.get()
  const score = stats$[leaderboardType].get()
  const value = rowValueString(leaderboardType, score)
  const filtered = filterValue(leaderboardType, score)
  return (
    <Row
      rank={531}
      name={user == null ? 'SIGN UP TO SET NAME' : user.user_metadata['name']}
      score={filtered ? value : '--'}
      highlight
    />
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
      <Leaderboard />
      {/* <Table /> */}
      <br />
      <TSizableText>Personal Record:</TSizableText>
      <br />
      <PersonalRecordRow />
    </TabContainer>
  )
})
