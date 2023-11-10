import React, { useRef, RefObject } from 'react'
import { Dimensions, View } from 'react-native'
import DefaultTimer from './DefaultTimer'
import { Stack, XStack } from '@my/ui'
import { GameEngineEntities, GameEngineEntity, GameEngineProperties } from './rnge-types'
import { For, observer, useMount, useUnmount } from '@legendapp/state/react'
import { ObservableObject, observable } from '@legendapp/state'
import { SharedValue } from 'react-native-reanimated'
import { Body } from 'matter-js'
import { GameTile } from 'app/components/GameTile'

export const entities$ = observable<GameEngineEntities>()
export const frame$ = observable<number>(0)
export const tileBodies: Record<number, Body> = {}
export const tileRefs: Record<number, RefObject<View>> = {}

type SharedBodyVals = SharedValue<{ x: number; y: number; angle: string }>
type TilesState = {
  refs: Record<number, SharedBodyVals>
  register: (id: number, ref: SharedBodyVals) => void
}
export const tiles$ = observable<TilesState>({
  refs: {},
  register: (id, ref) => {
    tiles$.refs.set((refs) => ({ ...refs, [id]: ref }))
  },
})

export const GameEngine = observer(
  ({ systems = [], entities: propsEntities = [], style, children }: GameEngineProperties) => {
    const timer = useRef(new DefaultTimer())
    const screen = useRef(Dimensions.get('window'))
    const previousTime = useRef<number>()
    const previousDelta = useRef<number>()

    useMount(() => {
      entities$.set(propsEntities)
      start()
    })

    useUnmount(() => {
      stop()
      timer.current.unsubscribe(updateHandler)
    })

    const updateHandler = (currentTime: number) => {
      if (previousTime.current == null) previousTime.current = currentTime

      const args = {
        screen: screen.current,
        time: {
          current: currentTime,
          previous: previousTime.current ?? currentTime,
          delta: currentTime - (previousTime.current ?? currentTime),
          previousDelta: previousDelta.current ?? 0,
        },
      }

      if (args.time.delta < 8.3) return null
      ;(systems ?? []).forEach((sys) => sys(args))

      previousTime.current = currentTime
      previousDelta.current = args.time.delta
    }

    timer.current.subscribe(updateHandler)

    const clear = () => {
      previousTime.current = undefined
      previousDelta.current = undefined
    }

    const start = () => {
      clear()
      timer.current.start()
    }

    const stop = () => {
      timer.current.stop()
    }

    return (
      <Stack f={1} style={style}>
        <For each={entities$} optimized>
          {(entity$) => {
            const entity = entity$.peek() as GameEngineEntity
            if (entity.type !== 'tile') return <></>
            return <GameTile entity$={entity$ as ObservableObject<GameEngineEntity>} />
          }}
        </For>

        <XStack pointerEvents={'box-none'} fullscreen>
          {children}
        </XStack>
      </Stack>
    )
  }
)
