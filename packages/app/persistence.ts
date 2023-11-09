import { ObservablePersistenceConfig } from '@legendapp/state'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

export const localPersistenceConfig: ObservablePersistenceConfig = {
  pluginLocal: ObservablePersistLocalStorage,
}
