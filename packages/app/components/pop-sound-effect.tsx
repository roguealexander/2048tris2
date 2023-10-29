import { observer, useObserve } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { getTilePower } from 'app/tiles'
import useSound from 'use-sound'

export const PopSoundEffect = observer(() => {
  const [playPop] = useSound('../sounds/pop.mp3', {
    volume: 0.5,
    playbackRate: 1,
  })

  useObserve(appState$.popSound, ({ value }) => {
    if (value == null) return
    const { size } = value
    const power = getTilePower(size)
    const rate = Math.max(0.5, 2 - 0.15 * power)
    playPop({ playbackRate: rate })
  })

  return null
})
