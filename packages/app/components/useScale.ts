import { useSelector } from '@legendapp/state/react'
import { appState$ } from 'app/appState'

export const useScale = () => useSelector(appState$.scale)
