import { observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { Tile } from './tile'
import { Shake, SizableText, XStack } from '@my/ui'

export const Hold = observer(() => {
  return (
    <>
      <SizableText>Hold:</SizableText>
      <XStack w="$12" h="$12" jc="center" ai="center" bg="$playarea" bw={4} boc="$border">
        <Shake shakeKey={`${state$.holdShakeCount.get()}`} shakeDistance={12} shakeTimes={3}>
          <XStack o={state$.holdAvailable.get() ? 1 : 0.5}>
            <Tile size={state$.heldTile} />
          </XStack>
        </Shake>
      </XStack>
    </>
  )
})
