import { observer, useObserveEffect } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { TileRecord } from 'app/types'
import Sound from 'react-native-sound'
import * as Haptics from 'expo-haptics'

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

const haptics: TileRecord<Haptics.ImpactFeedbackStyle> = {
  '2': Haptics.ImpactFeedbackStyle.Light,
  '4': Haptics.ImpactFeedbackStyle.Light,
  '8': Haptics.ImpactFeedbackStyle.Light,
  '16': Haptics.ImpactFeedbackStyle.Light,
  '32': Haptics.ImpactFeedbackStyle.Medium,
  '64': Haptics.ImpactFeedbackStyle.Medium,
  '128': Haptics.ImpactFeedbackStyle.Medium,
  '256': Haptics.ImpactFeedbackStyle.Medium,
  '512': Haptics.ImpactFeedbackStyle.Heavy,
  '1024': Haptics.ImpactFeedbackStyle.Heavy,
  '2048': Haptics.ImpactFeedbackStyle.Heavy,
  '4096': Haptics.ImpactFeedbackStyle.Heavy,
  '8192': Haptics.ImpactFeedbackStyle.Heavy,
}

export const PopSoundEffect = observer(() => {
  useObserveEffect(appState$.popSound, ({ value }) => {
    if (value == null) return
    const { size } = value

    // SOUND
    sounds[size].play()

    // HAPTICS
    Haptics.impactAsync(haptics[size])
  })

  return null
})
