import { Memo, Show, observer } from '@legendapp/state/react'
import { Spacer, Spinner, TButton, TSizableText, XStack, YStack } from '@my/ui'
import { LeaderboardType } from 'app/types'
import { batch, computed, observable } from '@legendapp/state'
import { colors } from 'app/colors'
import { TabContainer } from './tab-container'
import { api } from 'app/utils/api'
import { RouterOutputs } from '@my/api'
import { DefaultBestTime, DefaultLowScore, stats$ } from 'app/statsState'
import { useUser } from 'app/utils/useUser'
import { appState$ } from 'app/appState'
import { getMinutesAndSeconds } from 'app/utils/time'

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
    case 'bestTime2048':
      return '2048 TIME'
    case 'bestTime4096':
      return '4096 TIME'
    case 'bestTime8192':
      return '8192 TIME'
  }
})

export const LeaderboardSelect = observer(() => {
  const scale = appState$.scale.get()
  const optionWidth = scale < 0 ? 100 : 70 * scale
  const leaderboard = leaderboard$.get()

  const milestone: '2048' | '4096' | '8192' | null =
    leaderboard === 'efficiency2048' || leaderboard === 'bestTime2048'
      ? '2048'
      : leaderboard === 'efficiency4096' || leaderboard === 'bestTime4096'
      ? '4096'
      : leaderboard === 'efficiency8192' || leaderboard === 'bestTime8192'
      ? '8192'
      : null
  const milestoneType: 'efficiency' | 'bestTime' | null =
    leaderboard === 'efficiency2048' ||
    leaderboard === 'efficiency4096' ||
    leaderboard === 'efficiency8192'
      ? 'efficiency'
      : leaderboard === 'bestTime2048' ||
        leaderboard === 'bestTime4096' ||
        leaderboard === 'bestTime8192'
      ? 'bestTime'
      : null

  const setMilestoneLeaderboard = (
    milestone: '2048' | '4096' | '8192' | null,
    milestoneType: 'efficiency' | 'bestTime' | null
  ) => {
    leaderboard$.set(`${milestoneType ?? 'efficiency'}${milestone ?? '2048'}`)
  }

  return (
    <XStack w="100%" jc="center" gap={18 * scale}>
      <YStack ai="center">
        <TSizableText size="$3">Score:</TSizableText>
        <XStack gap={8 * scale} h={28 * 2 + 8} ai="center">
          <XStack
            h={64}
            w={optionWidth}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('scoreHigh')}
          >
            <Show if={leaderboard$.get() === 'scoreHigh'}>
              <XStack fullscreen h={64} bg={colors.tile['2048']} />
            </Show>
            <TSizableText
              zi={2}
              color={leaderboard$.get() === 'scoreHigh' ? colors.background : colors.text}
            >
              High
            </TSizableText>
          </XStack>
          <XStack
            h={64}
            w={optionWidth}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => leaderboard$.set('scoreLow')}
          >
            <Show if={leaderboard$.get() === 'scoreLow'}>
              <XStack fullscreen h={64} bg={colors.tile['4096']} />
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
        <XStack gap={8 * scale}>
          <XStack
            h="$2"
            w={optionWidth}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => setMilestoneLeaderboard('2048', milestoneType)}
          >
            <Show if={milestone === '2048'}>
              <XStack fullscreen h="$2" bg={colors.tile[64]} />
            </Show>
            <TSizableText zi={2} color={milestone === '2048' ? colors.background : colors.text}>
              2048
            </TSizableText>
          </XStack>
          <XStack
            h="$2"
            w={optionWidth}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => setMilestoneLeaderboard('4096', milestoneType)}
          >
            <Show if={milestone === '4096'}>
              <XStack fullscreen h="$2" bg={colors.tile[32]} />
            </Show>
            <TSizableText zi={2} color={milestone === '4096' ? colors.background : colors.text}>
              4096
            </TSizableText>
          </XStack>
          <XStack
            h="$2"
            w={optionWidth}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => setMilestoneLeaderboard('8192', milestoneType)}
          >
            <Show if={milestone === '8192'}>
              <XStack fullscreen h="$2" bg={colors.tile[16]} />
            </Show>
            <TSizableText zi={2} color={milestone === '8192' ? colors.background : colors.text}>
              8192
            </TSizableText>
          </XStack>
        </XStack>
        <XStack gap={8 * scale} mt={4}>
          <XStack
            h="$2"
            w={optionWidth * 2 + 8 * scale}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => {
              setMilestoneLeaderboard(milestone, 'efficiency')
            }}
          >
            <Show if={milestoneType === 'efficiency'}>
              <XStack fullscreen h="$2" bg={colors.tile[64]} />
            </Show>
            <TSizableText
              zi={2}
              color={milestoneType === 'efficiency' ? colors.background : colors.text}
            >
              Efficiency
            </TSizableText>
          </XStack>
          <XStack
            h="$2"
            w={optionWidth}
            ai="center"
            jc="center"
            pos="relative"
            cursor="pointer"
            onPress={() => {
              setMilestoneLeaderboard(milestone, 'bestTime')
            }}
          >
            <Show if={milestoneType === 'bestTime'}>
              <XStack fullscreen h="$2" bg={colors.tile[16]} />
            </Show>
            <TSizableText
              zi={2}
              color={milestoneType === 'bestTime' ? colors.background : colors.text}
            >
              Time
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
          <TSizableText w={50}>RANK</TSizableText>
          <TSizableText fontWeight="bold">PLAYER</TSizableText>
        </XStack>
        <TSizableText fontWeight="bold" textAlign="right">
          <Memo>{leaderboardTitle$}</Memo>
        </TSizableText>
      </XStack>
      <XStack w="100%" h={2} bg="$border" />
    </>
  )
})

const Row = observer(
  ({
    index,
    data,
    highlight,
  }: {
    index: number
    data: Partial<RowData> | undefined
    highlight?: boolean
  }) => {
    return (
      <XStack pos="relative" h="$3" w="100%" ai="center" jc="space-between" px="$4">
        {(highlight || index % 2 === 0) && (
          <XStack fullscreen bg={colors.tile['2']} o={0.5} zi={-1} />
        )}
        {data != null && (
          <>
            <XStack ai="center" jc="center" gap="$4">
              <TSizableText w={40}>{data.rank ?? '--'}</TSizableText>
              <TSizableText fontWeight="bold">{data.name ?? ''}</TSizableText>
            </XStack>
            <TSizableText>{data.value ?? ''}</TSizableText>
          </>
        )}
      </XStack>
    )
  }
)

type LeaderboardQueryData = RouterOutputs['tris']['getLeaderboards']
type LeaderboardsKeys = keyof LeaderboardQueryData
type LeaderboardValues = NonNullable<LeaderboardQueryData[LeaderboardsKeys]>

export const Leaderboard = observer(() => {
  const { data: leaderboards, error, isLoading } = api.tris.getLeaderboards.useQuery()
  const leaderboardType = leaderboard$.get()
  const leaderboard = leaderboards?.[leaderboardType]

  return <Table data={leaderboard} error={error?.message} isLoading={isLoading} />
})

type RowData = { id: string; rank: number; name: string; value: string }

const extractRows = (type: LeaderboardType, data: LeaderboardValues | null | undefined) => {
  if (data == null) return []
  return data.map((row) => extractRowData(type, row))
}
const filterValue = (type: LeaderboardType, value: number): boolean => {
  switch (type) {
    case 'scoreHigh':
    case 'efficiency2048':
    case 'efficiency4096':
    case 'efficiency8192':
      return value !== 0
    case 'bestTime2048':
    case 'bestTime4096':
    case 'bestTime8192':
      return value !== DefaultBestTime
    case 'scoreLow':
      return value !== DefaultLowScore
  }
}
const typeDataColumn = (type: LeaderboardType): string => {
  switch (type) {
    case 'bestTime2048':
      return 'besttime2048'
    case 'bestTime4096':
      return 'besttime4096'
    case 'bestTime8192':
      return 'besttime8192'
    case 'scoreHigh':
    case 'efficiency2048':
    case 'efficiency4096':
    case 'efficiency8192':
    case 'scoreLow':
      return type
  }
}
const extractRowData = (type: LeaderboardType, row: LeaderboardValues[0]): RowData => {
  return {
    id: row.id,
    name: row.name,
    rank: row.rank,
    value: extractRowValue(type, row),
  }
}
const extractRowValue = (type: LeaderboardType, row: LeaderboardValues[0]): string => {
  const value = (row as any)[typeDataColumn(type)] as number
  return rowValueString(type, value)
}
const rowValueString = (type: LeaderboardType, value: number): string => {
  switch (type) {
    case 'scoreHigh':
    case 'scoreLow':
      return `${value}`
    case 'bestTime2048':
    case 'bestTime4096':
    case 'bestTime8192':
      return getMinutesAndSeconds(value)
    case 'efficiency2048':
    case 'efficiency4096':
    case 'efficiency8192':
      return `${value}%`
  }
}

const Table = observer(
  ({
    data,
    error,
    isLoading,
  }: {
    data: LeaderboardValues | undefined | null
    error: string | undefined
    isLoading: boolean
  }) => {
    const rows = extractRows(leaderboard$.get(), data)
    return (
      <YStack w="100%" pos="relative" ai="center" jc="center">
        <Header />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
          return <Row key={index} index={index} data={rows[index]} />
        })}
        {(isLoading || error != null) && <XStack fullscreen bg="$background" o={0.5} />}
        {isLoading && <Spinner color="$text" pos="absolute" />}
        {error != null && (
          <TSizableText pos="absolute" color={colors.tile[64]}>
            {error}
          </TSizableText>
        )}
      </YStack>
    )
  }
)

const PersonalRecordRow = observer(() => {
  const { user } = useUser()
  const { data: userLeaderboards } = api.tris.getUserLeaderboards.useQuery()

  const leaderboardType = leaderboard$.get()
  const statValue = stats$[leaderboardType].get()
  const userRow = userLeaderboards?.[leaderboardType]
  const rowFiltered = statValue == null ? false : filterValue(leaderboardType, statValue)

  const rowData = {
    id: userRow?.id ?? 'anon',
    name: user?.user_metadata?.name ?? 'YOU (anon)',
    rank: rowFiltered ? userRow?.rank : undefined,
    value: rowFiltered ? rowValueString(leaderboardType, statValue!) : '--',
  }

  return <Row index={0} highlight data={rowData} />
})

const JoinLeaderboardButton = observer(() => {
  const { user, isLoading } = useUser()
  if (isLoading || user != null) return null
  return (
    <>
      <Spacer />
      <TButton
        w="100%"
        onPress={() => {
          batch(() => {
            appState$.backTab.set('leaderboard')
            appState$.tab.set('user')
          })
        }}
      >
        JOIN LEADERBOARD
      </TButton>
    </>
  )
})

export const LeaderboardTab = observer(() => {
  return (
    <TabContainer tab="leaderboard">
      <TSizableText size="$5">SELECT LEADERBOARD:</TSizableText>
      <Spacer />
      <LeaderboardSelect />
      <Spacer />
      <Spacer />
      <TSizableText size="$5">TOP 10:</TSizableText>
      <Spacer />
      <Leaderboard />
      <Spacer />
      <Spacer />
      <TSizableText size="$5">PERSONAL RECORD:</TSizableText>
      <Spacer />
      <PersonalRecordRow />
      <JoinLeaderboardButton />
    </TabContainer>
  )
})
