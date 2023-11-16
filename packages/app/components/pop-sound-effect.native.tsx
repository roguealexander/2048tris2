import { observer, useObserveEffect } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { TileList, TileRecord, TileSize } from 'app/types'
import Sound from 'react-native-sound'
import * as Haptics from 'expo-haptics'
import { useEffect, useRef } from 'react'
import pop_2 from '../sounds/pop_2.mp3'
import pop_4 from '../sounds/pop_4.mp3'
import pop_8 from '../sounds/pop_8.mp3'
import pop_16 from '../sounds/pop_16.mp3'
import pop_32 from '../sounds/pop_32.mp3'
import pop_64 from '../sounds/pop_64.mp3'
import pop_128 from '../sounds/pop_128.mp3'
import pop_256 from '../sounds/pop_256.mp3'
import pop_512 from '../sounds/pop_512.mp3'
import pop_1024 from '../sounds/pop_1024.mp3'

Sound.setCategory('Playback')

const sound2 = new Sound(
  'https://audio-previews.elements.envatousercontent.com/files/105394911/preview.mp3',
  undefined,
  (error) => {
    if (error) {
      console.log('Error loading sound: ', error)
    }
  }
)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sound4 = new Sound(require('../sounds/pop_4.mp3'), (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound8 = new Sound(pop_8, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound16 = new Sound(pop_16, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound32 = new Sound(pop_32, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound64 = new Sound(pop_64, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound128 = new Sound(pop_128, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound256 = new Sound(pop_256, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound512 = new Sound(pop_512, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})
const sound1024 = new Sound(pop_1024, (error) => {
  if (error) {
    console.log('Error loading sound: ', error)
  }
})

// const sounds: TileRecord<Sound> = {
//   '2': sound2,
//   '4': sound4,
//   '8': sound8,
//   '16': sound16,
//   '32': sound32,
//   '64': sound64,
//   '128': sound128,
//   '256': sound256,
//   '512': sound512,
//   '1024': sound1024,
//   '2048': sound1024,
//   '4096': sound1024,
//   '8192': sound1024,
// }

const popUrl: TileRecord<string> = {
  '2': pop_2,
  '4': pop_4,
  '8': pop_8,
  '16': pop_16,
  '32': pop_32,
  '64': pop_64,
  '128': pop_128,
  '256': pop_256,
  '512': pop_512,
  '1024': pop_1024,
  '2048': pop_1024,
  '4096': pop_1024,
  '8192': pop_1024,
}
const popTile: TileRecord<string> = {
  '2': '2',
  '4': '4',
  '8': '8',
  '16': '16',
  '32': '32',
  '64': '64',
  '128': '128',
  '256': '256',
  '512': '512',
  '1024': '1024',
  '2048': '1024',
  '4096': '1024',
  '8192': '1024',
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

// let sound: Sound | null = null

const sounds: Partial<TileRecord<Sound>> = {}

const getPopUrl = (tile: TileSize) => {
  return `https://raw.githubusercontent.com/roguealexander/2048trisSounds/main/pop_${popTile[tile]}.mp3`
}

export const PopSoundEffect = observer(() => {
  const popSound = appState$.popSound.get()

  // INITIALIZE SOUNDS
  useEffect(() => {
    Sound.setCategory('Playback')
    TileList.forEach((tile) => {
      sounds[tile] = new Sound(getPopUrl(tile), undefined, (error) => {
        if (error) console.log('Error loading sound', tile, error)
      })
    })
    return () => {
      Object.values(sounds).forEach((sound) => {
        sound.release()
      })
    }
  }, [])

  useEffect(() => {
    if (popSound == null) return
    const { size } = popSound

    // SOUND
    if (sounds[size] != null) {
      sounds[size]?.setVolume(appState$.volume.peek()).play()
    }

    // HAPTICS
    Haptics.impactAsync(haptics[size])
  }, [popSound])

  return null
})
