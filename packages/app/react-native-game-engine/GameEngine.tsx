import React, { useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import DefaultTimer from './DefaultTimer'
import { Stack, XStack } from '@my/ui'
import { GameEngineEntities, GameEngineProperties } from './rnge-types'
import { useMount, useUnmount } from '@legendapp/state/react'

export const GameEngine = ({
  systems = [],
  entities: propsEntities = {},
  style,
  children,
}: GameEngineProperties) => {
  const [entities, setEntities] = useState<{ entities: GameEngineEntities }>({
    entities: propsEntities,
  })
  const timer = useRef(new DefaultTimer())
  const screen = useRef(Dimensions.get('window'))
  const previousTime = useRef<number>()
  const previousDelta = useRef<number>()

  useMount(() => {
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

    if (args.time.delta < 16.6) return

    // Fix physics time step to 60fps
    args.time.delta = 16.66667

    const newEntities = (systems ?? []).reduce(
      (entities, sys) => sys(entities, args),
      entities.entities
    )

    previousTime.current = currentTime
    previousDelta.current = args.time.delta
    setEntities({ entities: newEntities })
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
      {Object.values(entities.entities).map((entity) => {
        if (entity.renderer == null) return null
        return <entity.renderer key={entity.id} {...entity} />
      })}

      <XStack pointerEvents={'box-none'} fullscreen>
        {children}
      </XStack>
    </Stack>
  )
}
