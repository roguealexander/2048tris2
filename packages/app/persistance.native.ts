import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Global configuration
export const persistenceConfig = {
  pluginLocal: ObservablePersistAsyncStorage,
  localOptions: {
    asyncStorage: {
      AsyncStorage,
    },
  },
}
