import { configureObservablePersistence } from '@legendapp/state/persist'
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv'

export const pluginLocal = ObservablePersistMMKV
