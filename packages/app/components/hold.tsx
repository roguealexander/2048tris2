import { observer } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { Shake, TSizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import { useScale } from './useScale'

const horizontalSize = 144
const verticalSize = 104

export const Hold = observer(() => {
  const scale = useScale()
  const horizontal = appState$.layoutDimension.get() === 'horizontal'

  return (
    <YStack>
      <TSizableText>Hold:</TSizableText>
      <XStack
        w={(horizontal ? horizontalSize : verticalSize) * scale}
        h={(horizontal ? horizontalSize : verticalSize) * scale}
        jc="center"
        ai="center"
        bg="$playarea"
        bw={4 * scale}
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
