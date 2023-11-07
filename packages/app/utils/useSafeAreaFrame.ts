import { useWindowDimensions } from '@my/ui'
import { Rect } from 'react-native-safe-area-context'

export const useSafeAreaFrame = (): Rect => {
  const { width, height } = useWindowDimensions()
  return {
    x: 0,
    y: 0,
    width,
    height,
  }
}
