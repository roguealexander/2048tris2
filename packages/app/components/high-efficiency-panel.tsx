import { observer } from '@legendapp/state/react'
import { Button, SizableText, XStack, YStack } from '@my/ui'
import { state$, actions$ } from 'app/state'
import { ActiveTilesHistogram } from './active-tile-histogram'

export const HighEfficiencyPanel = observer(() => {
  const activeHighEfficiencyPanel = state$.activeHighEfficiencyPanel.get()
  const activeHighEfficiencyValue = state$.activeHighEfficiencyValue.get()

  if (activeHighEfficiencyPanel == null) return null

  return (
    <YStack gap="$4" ai="center" jc="center" pt={27} h="100%" mr="$12">
      <YStack ai="center">
        <SizableText size="$9" zi={1} textAlign='center'>
          NEW
          <br/>EFFICIENCY
          <br/>RECORD
        </SizableText>
        <br/>
        <SizableText size="$8" fontStyle="italic">
          Size: {activeHighEfficiencyPanel}
        </SizableText>
        <SizableText size="$8" fontStyle="italic">
          Efficiency: {activeHighEfficiencyValue}%
        </SizableText>
      </YStack>

      <XStack w="100%" h={2} bg="$border" />

      <YStack w="$12" gap="$2" ai="flex-start">
        <ActiveTilesHistogram />
      </YStack>

      <XStack w="100%" h={2} bg="$border" />

      <Button zi={1} br="$0" onPress={() => actions$.closeActiveHighEfficiencyPanel()}>
        Continue
      </Button>
    </YStack>
  )
})
