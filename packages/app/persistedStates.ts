import { configureObservablePersistence, persistObservable } from '@legendapp/state/persist'
import { localPersistenceConfig } from './persistence'
import { stats$ } from './statsState'
import { appState$ } from './appState'

// Global configuration
configureObservablePersistence({
  ...localPersistenceConfig,
})

persistObservable(stats$, {
  local: 'highScores_v2',
})
persistObservable(appState$, {
  local: 'appState',
})
