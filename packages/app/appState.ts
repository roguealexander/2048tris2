import { observable } from '@legendapp/state'

export type Tab = '2048tris' | 'how-to-play' | 'leaderboard' | 'user'

type AppState = {
  tab: Tab

  popSound: {
    power: number
    key: string | number
  } | null
}

export const appState$ = observable<AppState>({
  tab: '2048tris',
  popSound: null,
})

type AppActions = {
  triggerPopSound: (power: number, key: string | number) => void
}

export const appActions$ = observable<AppActions>({
  triggerPopSound: (power: number, key: string | number) => {
    appState$.popSound.set({
      power,
      key,
    })
  },
})
