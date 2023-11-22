import { batch } from '@legendapp/state'
import { observer } from '@legendapp/state/react'
import { appActions$, appState$ } from 'app/appState'
import { memo, useEffect, useRef } from 'react'
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import { AppState, Platform } from 'react-native'

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : Platform.OS === 'ios'
  ? 'ca-app-pub-9877675476183127/3120499694'
  : Platform.OS === 'android'
  ? 'ca-app-pub-9877675476183127/1073792991'
  : null

// eslint-disable-next-line react/display-name
const InterstitialComp = memo(() => {
  const { isLoaded, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
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

export const Interstitial = observer(() => {
  const prevAppState = useRef(AppState.currentState)
  const adAvailable = appState$.adAvailable.get()

  useEffect(() => {
    const interval = setInterval(() => {
      if (prevAppState.current !== 'active' && AppState.currentState === 'active') {
        appActions$.triggerAd()
      }
      prevAppState.current = AppState.currentState
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!adAvailable) return null

  return <InterstitialComp />
})
