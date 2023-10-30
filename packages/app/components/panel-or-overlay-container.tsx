import { ReactNode } from 'react'
import { YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import { observer } from '@legendapp/state/react'

export const PanelOrOverlayContainer = observer(({ children }: { children: ReactNode }) => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'
  const vertical = !horizontal
  return (
    <YStack
      gap="$4"
      ai="center"
      jc="center"
      {...(horizontal
        ? {
            h: 700,
          }
        : {
            fullscreen: true,
            zi: 4,
            pt: 64,
          })}
    >
      {vertical && <YStack fullscreen bg="$background" o={0.7} zi={1} />}
      <YStack w="100%" gap="$4" ai="center" jc="center" zi={2}>
        {children}
      </YStack>
    </YStack>
  )
})
