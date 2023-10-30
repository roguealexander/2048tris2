import { YStack } from '@my/ui'
import { Dimensions } from 'react-native'
const screenHeight = Dimensions.get('window').height

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

export const HomeLayout = ({ children, fullPage = false, padded = false }: HomeLayoutProps) => {
  console.log({
    screenHeight,
  })
  return (
    <YStack f={1} height="100vh" overflow="hidden">
      <YStack
        {...(fullPage && { flex: 1 })}
        {...(padded && {
          maxWidth: 800,
          mx: 'auto',
          px: '$2',
          width: '100%',
        })}
        alignItems="center"
        justifyContent="flex-start"
      >
        {children}
      </YStack>
    </YStack>
  )
}
