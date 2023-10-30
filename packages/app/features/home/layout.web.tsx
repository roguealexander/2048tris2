import { YStack, useWindowDimensions } from '@my/ui'

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

export const HomeLayout = ({ children, fullPage = false, padded = false }: HomeLayoutProps) => {
  const dimensions = useWindowDimensions()
  return (
    <YStack h={dimensions.height} mih={dimensions.height} mah={dimensions.height} overflow="hidden">
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
