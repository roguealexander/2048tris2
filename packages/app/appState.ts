import { observable } from '@legendapp/state'

export type Tab = '2048tris' | 'rules' | 'leaderboard' | 'user'

type AppState = {
  tab: Tab
}

export const appState$ = observable<AppState>({
  tab: '2048tris',
})
