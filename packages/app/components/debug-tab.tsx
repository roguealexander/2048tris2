import { observer } from '@legendapp/state/react'
import { Spacer, TButton, TSizableText, XStack } from '@my/ui'
import { TileList } from 'app/types'
import { TabContainer } from './tab-container'
import { appActions$, appState$ } from 'app/appState'

export const DebugTab = observer(() => {
  return (
    <TabContainer tab="debug">
      <TSizableText size="$5">DEBUG:</TSizableText>
      <Spacer />
      <TSizableText>Pop sounds:</TSizableText>
      {TileList.map((tile) => (
        <XStack
          h={32}
          cur="pointer"
          key={tile}
          onPress={() => appActions$.triggerPopSound(tile, tile)}
        >
          <TSizableText>{tile}</TSizableText>
        </XStack>
      ))}
      <Spacer />
      <TSizableText>Revert Onboarding</TSizableText>
      <TButton onPress={() => appState$.onboarded.set(false)}>SET ONBOARDED FALSE</TButton>
    </TabContainer>
  )
})
