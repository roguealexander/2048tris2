import { observable } from '@legendapp/state'
import { TileSize } from './types'

export type Tab = '2048tris' | 'how-to-play' | 'leaderboard' | 'user' | 'debug'
export type LayoutDimension = 'vertical' | 'horizontal'

type AppState = {
  tab: Tab
  backTab: Tab | null
  layoutDimension: LayoutDimension

  volume: number

  popSound: {
    size: TileSize
    key: string | number
  } | null

  scale: number
  statsPanelOpen: boolean

  adTimestamp: number | null
  adAvailable: boolean
}

export const appState$ = observable<AppState>({
  tab: '2048tris',
  backTab: null,
  layoutDimension: 'horizontal',
  volume: 0.5,
  popSound: null,
  scale: 0,
  statsPanelOpen: false,
  adTimestamp: null,
  adAvailable: false,
})

type AppActions = {
  triggerPopSound: (size: TileSize, key: string | number) => void
  triggerAd: () => void
}

const minInMS = 60 * 1000

export const appActions$ = observable<AppActions>({
  triggerPopSound: (size: TileSize, key: string | number) => {
    appState$.popSound.set({
      size,
      key,
    })
  },
  triggerAd: () => {
    const currentTimestamp = Date.now()
    const adTimestamp = appState$.adTimestamp.peek() ?? 0
    const minutesSinceLastAd = (currentTimestamp - adTimestamp) / minInMS
    console.log(`AD TRIGGERED, last ad ${minutesSinceLastAd} mins ago`)
    if (minutesSinceLastAd >= 10) {
      appState$.adAvailable.set(true)
    }
  },
})
