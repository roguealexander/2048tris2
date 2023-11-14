import { batch, observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { appState$ } from 'app/appState'
import { memo, useEffect, useRef } from 'react'
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import { AppState, Platform } from 'react-native'

const currentTimestamp$ = observable<number | null>(null)

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : Platform.OS === 'ios'
  ? 'ca-app-pub-9877675476183127/3120499694'
  : Platform.OS === 'android'
  ? 'ca-app-pub-9877675476183127/1073792991'
  : null

// eslint-disable-next-line react/display-name
const InterstitialInner = memo(() => {
  console.log({ adUnitId })
  const { isLoaded, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['gaming', 'games'],
  })

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (!isLoaded) return
    show()
    batch(() => {
      appState$.adTimestamp.set(Date.now())
      appState$.adAvailable.set(false)
    })
  }, [isLoaded, show])

  return null
})

const minInMS = 1 * 60 * 1000

export const Interstitial = observer(() => {
  const prevAppState = useRef(AppState.currentState)
  useEffect(() => {
    const interval = setInterval(() => {
      if (prevAppState.current !== 'active' && AppState.currentState === 'active') {
        appState$.adAvailable.set(true)
      }
      prevAppState.current = AppState.currentState
      currentTimestamp$.set(Date.now())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const minutesSinceLastAd =
    ((currentTimestamp$.get() ?? 0) - (appState$.adTimestamp.get() ?? 0)) / minInMS

  if (!appState$.adAvailable.get()) return null
  if (appState$.adTimestamp.get() != null && minutesSinceLastAd < 10) return null

  return <InterstitialInner />
})
