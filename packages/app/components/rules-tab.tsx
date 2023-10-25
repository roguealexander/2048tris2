import { observer } from '@legendapp/state/react'
import { SizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import { TileSize } from 'app/types'
import { Tile } from './tile'
import { observable } from '@legendapp/state'
import { ReactNode } from 'react'
import { getTileRadius } from 'app/tiles'

const size4 = observable<TileSize>('4')
const mouseX = observable<number>(0)

const TileDropPositioner = observer(({ children }: { children: ReactNode }) => {
  const dropX = mouseX.get()
  return (
    <XStack pos="absolute" pe="none" l={dropX} t={64} x="-50%" y="-50%">
      {children}
    </XStack>
  )
})

const RulesDropExample = observer(() => {
  const releaseBall = () => {}

  const moveBall = (event: any) => {
    mouseX.set(Math.max((getTileRadius('4') / 2) + 4, event.nativeEvent.offsetX))
  }

  return (
    <YStack onPress={releaseBall} onPointerMove={moveBall} w={450} h={128}>
      <XStack w='100%' h='50%' mt='auto' bg='$playarea' blw={4} brw={4} boc="$border"/>
      <TileDropPositioner>
        <Tile size={size4} />
      </TileDropPositioner>
    </YStack>
  )
})

export const RulesTab = observer(() => {
  if (appState$.tab.get() !== 'rules') return

  return (
    <YStack fullscreen bg="$background" ai="center" jc="center">
      <YStack ai="flex-start">
        <SizableText size="$5">HOW TO PLAY:</SizableText>
        <br />
        <SizableText>
          <b>Hover</b> to position, <b>Click</b> to drop
        </SizableText>
        <RulesDropExample />
        <br />
        <SizableText>
          <b>Space</b> to hold a tile
        </SizableText>
        <br />
        <SizableText>Combine tiles</SizableText>
      </YStack>
    </YStack>
  )
})
