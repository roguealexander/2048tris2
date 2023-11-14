import { observable } from '@legendapp/state'
import { TileSize } from './types'

export type Tab = '2048tris' | 'how-to-play' | 'leaderboard' | 'user' | 'debug'
export type LayoutDimension = 'vertical' | 'horizontal'

type AppState = {
  tab: Tab
  backTab: Tab | null
  layoutDimension: LayoutDimension

  popSound: {
    size: TileSize
    key: string | number
  } | null

  scale: number
  statsPanelOpen: boolean
}

export const appState$ = observable<AppState>({
  tab: '2048tris',
  backTab: 'leaderboard',
  layoutDimension: 'horizontal',
  popSound: null,
  scale: 1,
  statsPanelOpen: false,
})

type AppActions = {
  triggerPopSound: (size: TileSize, key: string | number) => void
}

export const appActions$ = observable<AppActions>({
  triggerPopSound: (size: TileSize, key: string | number) => {
    appState$.popSound.set({
      size,
      key,
    })
  },
})
