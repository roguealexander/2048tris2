import { Session } from '@supabase/supabase-js'
import HomeScreen from 'app/features/home/screen'
import { Provider } from 'app/provider'
import { supabase } from 'app/utils/supabase/client.native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack, useSegments } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connectToDevTools } from 'react-devtools-core'
import { colors } from 'app/colors'

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8081,
  })
}

export default function Layout() {
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

  if (!fontLoaded || !sessionLoadAttempted) {
    return null
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }} onLayout={onLayoutRootView}>
      <Provider initialSession={initialSession}>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
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
