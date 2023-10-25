import {
  YStack,
} from '@my/ui'

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

export const HomeLayout = ({ children, fullPage = false, padded = false }: HomeLayoutProps) => {
  return (
    <YStack f={1}>
      <YStack
        {...(fullPage && { flex: 1 })}
        {...(padded && {
          maxWidth: 800,
          mx: 'auto',
          px: '$2',
          width: '100%',
        })}
      >
        {children}
      </YStack>
    </YStack>
  )
}
