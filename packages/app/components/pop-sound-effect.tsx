import { observer, useObserveEffect } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { getTilePower } from 'app/tiles'
import useSound from 'use-sound'

export const PopSoundEffect = observer(() => {
  const [playPop] = useSound('../sounds/pop.mp3', {
    volume: appState$.volume.get(),
    playbackRate: 1,
  })

  useObserveEffect(appState$.popSound, ({ value }) => {
    if (value == null) return
    const { size } = value
    const power = getTilePower(size)
    const rate = Math.max(0.5, 2 - 0.15 * power)
    playPop({ playbackRate: rate })
  })

  return null
})
