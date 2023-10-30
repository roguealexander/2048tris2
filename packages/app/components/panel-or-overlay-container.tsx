import { ReactNode } from 'react'
import { useMedia, YStack } from '@my/ui'

export const PanelOrOverlayContainer = ({ children }: { children: ReactNode }) => {
  const media = useMedia()
  return (
    <YStack
      gap="$4"
      ai="center"
      jc="center"
      $gtMd={{ h: 700 }}
      $md={{ fullscreen: true, zi: 4, pt: 64 }}
    >
      {media.md && <YStack fullscreen bg="$background" o={0.7} zi={1} />}
      <YStack w="100%" gap="$4" ai="center" jc="center" zi={2}>
        {children}
      </YStack>
    </YStack>
  )
}
