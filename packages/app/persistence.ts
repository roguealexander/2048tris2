import { configureObservablePersistence } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

export const pluginLocal = ObservablePersistLocalStorage
