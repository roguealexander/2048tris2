import { observer } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { Shake, TSizableText, XStack, YStack, useMedia } from '@my/ui'
import { appState$ } from 'app/appState'

export const Hold = observer(() => {
  const horizontal = appState$.layoutDimension.get() === 'horizontal'

  return (
    <YStack>
      <TSizableText>Hold:</TSizableText>
      <XStack
        w={horizontal ? '$12' : '$10'}
        h={horizontal ? '$12' : '$10'}
        jc="center"
        ai="center"
        bg="$playarea"
        bw={4}
        boc="$border"
        cur="pointer"
        onPress={() => actions$.hold()}
      >
        <Shake shakeKey={state$.holdShakeKey.get()} shakeDistance={12} shakeTimes={5}>
          <XStack o={state$.holdAvailable.get() ? 1 : 0.5}>
            <Tile size={state$.heldTile} fixedSize={horizontal ? undefined : '4'} />
          </XStack>
        </Shake>
      </XStack>
    </YStack>
  )
})
