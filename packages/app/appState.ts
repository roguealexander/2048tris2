import { observable } from '@legendapp/state'

export type Tab = '2048tris' | 'how-to-play' | 'leaderboard' | 'user'

type AppState = {
  tab: Tab
}

export const appState$ = observable<AppState>({
  tab: '2048tris',
})
