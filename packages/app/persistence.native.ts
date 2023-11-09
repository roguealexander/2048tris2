import { ObservablePersistenceConfig } from '@legendapp/state'
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Global configuration
export const localPersistenceConfig: ObservablePersistenceConfig = {
  pluginLocal: ObservablePersistAsyncStorage,
  localOptions: {
    asyncStorage: {
      AsyncStorage,
    },
  },
}
