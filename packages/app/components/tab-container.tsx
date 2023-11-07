import { observer } from '@legendapp/state/react'
import { ScrollView } from '@my/ui'
import { Tab, appState$ } from 'app/appState'
import { ReactNode } from 'react'
import { useScale } from './useScale'
import { useSafeAreaFrame } from 'app/utils/useSafeAreaFrame'

export const TabContainer = observer(({ tab, children }: { tab: Tab; children: ReactNode }) => {
  const scale = useScale()
  const frame = useSafeAreaFrame()
  if (appState$.tab.get() !== tab) return null

  return (
    <ScrollView
      pos="absolute"
      t={0}
      bg="$background"
      pt={86}
      pb={64}
      zi={5}
      height={frame.height}
      w={appState$.layoutDimension.get() === 'horizontal' ? 906 : 468 * scale}
      contentContainerStyle={{
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        maxWidth: '100%',
        paddingHorizontal: 8 * scale,
        width: 450,
      }}
    >
      {children}
    </ScrollView>
  )
})
