import { observer } from '@legendapp/state/react'
import { ScrollView, YStack } from '@my/ui'
import { Tab, appState$ } from 'app/appState'
import { ReactNode } from 'react'

export const TabContainer = observer(({ tab, children }: { tab: Tab; children: ReactNode }) => {
  if (appState$.tab.get() !== tab) return null

  return (
    <ScrollView
      fullscreen
      mah="100%"
      bg="$background"
      ai="center"
      jc="flex-start"
      pt={86}
      pb={64}
      zi={5}
    >
      <YStack ai="flex-start" miw={450}>
        {children}
      </YStack>
    </ScrollView>
  )
})
