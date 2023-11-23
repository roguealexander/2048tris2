import { rand, randNumber, randUser, randUserName } from '@ngneat/falso'
import { writeFileSync } from 'fs'

type SeedData = {
  name: string
  timePlayed: number
  gamesPlayed: number
  ballsDropped: number

  scoreHigh: number
  scoreLow: number

  efficiency2048: number
  efficiency4096: number
  efficiency8192: number

  bestTime2048: number
  bestTime4096: number
  bestTime8192: number

  muted: boolean
  isSeed: true
}

const keys = [
  'name',
  'timePlayed',
  'gamesPlayed',
  'ballsDropped',
  'scoreHigh',
  'scoreLow',
  'efficiency2048',
  'efficiency4096',
  'efficiency8192',
  'bestTime2048',
  'bestTime4096',
  'bestTime8192',
  'muted',
  'isSeed',
] as const

const DefaultLowScore = 100000
const DefaultBestTime = 10000000000

const gaussianRand = () => {
  var rand = 0

  for (var i = 0; i < 2; i += 1) {
    rand += Math.random()
  }

  return rand / 2
}

const randOnDistribution = (
  min: number,
  max: number,
  skew: number,
  emptyChance: number,
  emptyDefault: number
) => {
  const isEmpty = Math.random() < emptyChance
  if (isEmpty) {
    return emptyDefault
  }

  return min + gaussianRand() * (max - min)
}

const minToMS = (m: number) => m * 60 * 1000

const getScoreboardName = () => {
  const user = randUser()
  const option1 = user.firstName
  const option2 = user.lastName
  const option3 = user.username
  const option4 = user.firstName + ' ' + user.lastName
  const option5 = user.firstName + '_' + user.lastName
  const option6 = user.firstName + randNumber({ min: 1, max: 99 })
  const option7 = user.firstName + '_' + randNumber({ min: 1, max: 99 })
  const option8 = randNumber({ min: 1, max: 99 }) + '_' + user.lastName
  return rand([option1, option2, option3, option4, option5, option6, option7, option8])
}

const createSeedData = (n: number) => {
  const seedData: SeedData[] = []

  for (let i = 0; i < n; i++) {
    seedData.push({
      name: getScoreboardName(),
      scoreHigh: Math.round(randOnDistribution(1000, 12450, 0.5, 0.1, 0)),
      scoreLow: Math.round(randOnDistribution(961, 3000, 0.5, 0.1, DefaultLowScore)),
      timePlayed: 0,
      gamesPlayed: 0,
      ballsDropped: 0,

      efficiency2048: Math.round(100 * randOnDistribution(20, 99, 0.75, 0.6, 0)) / 100,
      efficiency4096: Math.round(100 * randOnDistribution(20, 99, 0.55, 0.8, 0)) / 100,
      efficiency8192: Math.round(100 * randOnDistribution(20, 99, 0.45, 0.9, 0)) / 100,

      bestTime2048: Math.round(
        randOnDistribution(minToMS(7), minToMS(20), 0.5, 0.6, DefaultBestTime)
      ),
      bestTime4096: Math.round(
        randOnDistribution(minToMS(16), minToMS(30), 0.5, 0.8, DefaultBestTime)
      ),
      bestTime8192: Math.round(
        randOnDistribution(minToMS(20), minToMS(40), 0.5, 0.9, DefaultBestTime)
      ),

      muted: false,
      isSeed: true,
    })
  }

  return seedData
}

export const getMinutesAndSeconds = (duration: number) => {
  let inSecs = Math.round(duration / 1000)
  const minutes = Math.floor(inSecs / 60)
  inSecs -= minutes * 60
  const seconds = inSecs
  return `${minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`
}

const getSeedDataRecords = (
  seedData: SeedData[]
): Pick<
  SeedData,
  | 'scoreHigh'
  | 'scoreLow'
  | 'efficiency2048'
  | 'efficiency4096'
  | 'efficiency8192'
  | 'bestTime2048'
  | 'bestTime4096'
  | 'bestTime8192'
> => {
  let scoreHigh = 0
  let scoreLow = DefaultLowScore
  let efficiency2048 = 0
  let efficiency4096 = 0
  let efficiency8192 = 0
  let bestTime2048 = DefaultBestTime
  let bestTime4096 = DefaultBestTime
  let bestTime8192 = DefaultBestTime

  seedData.forEach((data) => {
    if (data.scoreHigh > scoreHigh) scoreHigh = data.scoreHigh
    if (data.scoreLow !== DefaultLowScore && data.scoreLow < scoreLow) scoreLow = data.scoreLow

    if (data.efficiency2048 > efficiency2048) efficiency2048 = data.efficiency2048
    if (data.efficiency4096 > efficiency4096) efficiency4096 = data.efficiency4096
    if (data.efficiency8192 > efficiency8192) efficiency8192 = data.efficiency8192

    if (data.bestTime2048 !== DefaultBestTime && data.bestTime2048 < bestTime2048)
      bestTime2048 = data.bestTime2048
    if (data.bestTime4096 !== DefaultBestTime && data.bestTime4096 < bestTime4096)
      bestTime4096 = data.bestTime4096
    if (data.bestTime8192 !== DefaultBestTime && data.bestTime8192 < bestTime8192)
      bestTime8192 = data.bestTime8192
  })

  return {
    scoreHigh,
    scoreLow,
    efficiency2048,
    bestTime2048,
    efficiency4096,
    bestTime4096,
    efficiency8192,
    bestTime8192,
  }
}

const extractSQLRow = (seedData: SeedData[]): string[] => {
  return seedData.map((data) => {
    return `INSERT INTO "users" (${keys
      .map((key) => JSON.stringify(key))
      .join(', ')}) VALUES (${keys
      .map((key) => (typeof data[key] === 'string' ? `'${data[key]}'` : data[key]))
      .join(', ')});`
  })
}

const writeSQLSeedFile = (sqlRows: string[]) => {
  writeFileSync('./seed.sql', sqlRows.join('\n'))
}

const seeded = createSeedData(2000)
const records = getSeedDataRecords(seeded)
const sqlRows = extractSQLRow(seeded)
writeSQLSeedFile(sqlRows)
