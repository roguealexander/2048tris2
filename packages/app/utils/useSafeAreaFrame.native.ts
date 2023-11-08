import { useWindowDimensions } from '@my/ui'
import { Rect, useSafeAreaInsets } from 'react-native-safe-area-context'

export const useSafeAreaFrame = (): Rect => {
  const insets = useSafeAreaInsets()
  const { width, height } = useWindowDimensions()
  return {
    x: insets.left,
    y: insets.top,
    width: width - insets.left - insets.right,
    height: height - insets.top - insets.bottom,
  }
}
