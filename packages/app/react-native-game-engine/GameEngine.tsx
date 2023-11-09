import React, { useRef } from 'react'
import { Dimensions } from 'react-native'
import DefaultTimer from './DefaultTimer'
import { Stack, XStack } from '@my/ui'
import { GameEngineEntities, GameEngineEntity, GameEngineProperties } from './rnge-types'
import { For, observer, useMount, useUnmount } from '@legendapp/state/react'
import { ObservableObject, observable } from '@legendapp/state'

export const entities$ = observable<GameEngineEntities>()
export const frame$ = observable<number>(0)

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

      frame$.set((frame) => frame + 1)
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
            if (entity.renderer == null) return <></>
            return <entity.renderer entity$={entity$} />
          }}
        </For>

        <XStack pointerEvents={'box-none'} fullscreen>
          {children}
        </XStack>
      </Stack>
    )
  }
)
