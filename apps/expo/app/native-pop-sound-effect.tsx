import { observer, useObserveEffect } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { getTilePower } from 'app/tiles'
import { TileRecord } from 'app/types'
import Sound from 'react-native-sound'

Sound.setCategory('Playback')
const sound2 = new Sound('pop_2.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound4 = new Sound('pop_4.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound8 = new Sound('pop_8.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound16 = new Sound('pop_16.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound32 = new Sound('pop_32.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound64 = new Sound('pop_64.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound128 = new Sound('pop_128.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound256 = new Sound('pop_256.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound512 = new Sound('pop_512.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound1024 = new Sound('pop_1024.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})

const sounds: TileRecord<Sound> = {
  '2': sound2,
  '4': sound4,
  '8': sound8,
  '16': sound16,
  '32': sound32,
  '64': sound64,
  '128': sound128,
  '256': sound256,
  '512': sound512,
  '1024': sound1024,
  '2048': sound1024,
  '4096': sound1024,
  '8192': sound1024,
}

export const NativePopSoundEffect = observer(() => {
  useObserveEffect(appState$.popSound, ({ value }) => {
    if (value == null) return
    const { size } = value
    sounds[size].play()
  })

  return null
})
