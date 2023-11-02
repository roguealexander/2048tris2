import { Session } from '@supabase/supabase-js'
import HomeScreen from 'app/features/home/screen'
import { Provider } from 'app/provider'
import { supabase } from 'app/utils/supabase/client.native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack, useSegments } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Page() {
  const segments = useSegments()
  console.log('segments', segments)
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    CourierPrime: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-Regular.ttf'),
    CourierPrimeItalic: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-Italic.ttf'),
    CourierPrimeBold: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-Bold.ttf'),
    CourierPrimeBoldItalic: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-BoldItalic.ttf'),
  })

  const [sessionLoadAttempted, setSessionLoadAttempted] = useState(false)
  const [initialSession, setInitialSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (data) {
          setInitialSession(data.session)
        }
      })
      .finally(() => {
        setSessionLoadAttempted(true)
      })
  }, [])
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded && sessionLoadAttempted) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded, sessionLoadAttempted])

  console.log({
    fontLoaded,
    sessionLoadAttempted,
  })

  if (!fontLoaded || !sessionLoadAttempted) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Provider initialSession={initialSession}>
          <HomeScreen />
        </Provider>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
})
