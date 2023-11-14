import { observer } from '@legendapp/state/react'
import { ScrollView, Spacer, TButton, XStack } from '@my/ui'
import { Tab, appState$ } from 'app/appState'
import { ReactNode } from 'react'
import { useSafeAreaFrame } from 'app/utils/useSafeAreaFrame'
import { ArrowLeft, ChevronLast, ChevronLeft } from '@tamagui/lucide-icons'

export const TabContainer = observer(({ tab, children }: { tab: Tab; children: ReactNode }) => {
  const scale = appState$.scale.get()
  const frame = useSafeAreaFrame()
  if (appState$.tab.get() !== tab) return null

  return (
    <ScrollView
      pos="absolute"
      t={0}
      bg="$background"
      zi={5}
      height={frame.height}
      w={appState$.layoutDimension.get() === 'horizontal' ? 906 : frame.width}
      contentContainerStyle={{
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 8 * scale,
        width: 450 * scale,
      }}
    >
      <Spacer size={84} />
      {children}
      <Spacer size={84} />
    </ScrollView>
  )
})
