import { observer } from '@legendapp/state/react'
import { actions$, state$ } from '../state'
import { Tile } from './tile'
import { Shake, TSizableText, XStack, YStack, useMedia } from '@my/ui'

export const Hold = observer(() => {
  const { md } = useMedia()
  const scale = md ? 0.6 : 1

  return (
    <YStack>
      <TSizableText>Hold:</TSizableText>
      <XStack
        $gtMd={{ w: '$12', h: '$12' }}
        $md={{ w: '$9', h: '$9' }}
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
            <Tile size={state$.heldTile} stackProps={{ scale }} />
          </XStack>
        </Shake>
      </XStack>
    </YStack>
  )
})
