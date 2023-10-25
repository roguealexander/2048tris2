import { Memo, observer } from '@legendapp/state/react'
import { state$ } from '../state'
import { TileList } from '../types'
import { getTileColor } from '../tiles'
import { SizableText, XStack, YStack } from '@my/ui'


export const Stats = observer(() => {
  return (
    <>
      <SizableText>
        Score:
        <br />
        <b>
          <Memo>{state$.points}</Memo>
        </b>
      </SizableText>
      <SizableText>
        Efficiency:
        <br />
        <b>
          <Memo>{state$.efficiency}</Memo>%
        </b>
      </SizableText>
    </>
  )
})
