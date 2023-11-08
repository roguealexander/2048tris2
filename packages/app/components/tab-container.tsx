import { observer } from '@legendapp/state/react'
import { ScrollView, Spacer } from '@my/ui'
import { Tab, appState$ } from 'app/appState'
import { ReactNode } from 'react'
import { useSafeAreaFrame } from 'app/utils/useSafeAreaFrame'

export const TabContainer = observer(({ tab, children }: { tab: Tab; children: ReactNode }) => {
  const scale = appState$.scale.get()
  const frame = useSafeAreaFrame()
  console.log('container size', frame.width, 'content width', 450 * scale)
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
        width: appState$.layoutDimension.get() === 'horizontal' ? 906 : 450 * scale,
      }}
    >
      <Spacer size={84} />
      {children}
      <Spacer size={84} />
    </ScrollView>
  )
})
