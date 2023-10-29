import { observable } from '@legendapp/state'
import { TileSize } from './types'

export type Tab = '2048tris' | 'how-to-play' | 'leaderboard' | 'user'

type AppState = {
  tab: Tab

  popSound: {
    size: TileSize
    key: string | number
  } | null
}

export const appState$ = observable<AppState>({
  tab: '2048tris',
  popSound: null,
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
