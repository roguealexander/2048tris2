import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads'

const setup = async () => {
  // const result = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
  // if (result === RESULTS.DENIED) {
  //   // The permission has not been requested, so request it.
  //   await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
  // }

  const adapterStatuses = await mobileAds().setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,

    // An array of test device IDs to allow.
    testDeviceIdentifiers: ['EMULATOR'],
  })

  console.log('mobile ads request config set', adapterStatuses)

  const adsInitializeResult = mobileAds().initialize()
  console.log('mobile ads initialized', adsInitializeResult)

  // const interstitial = await InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
  //   requestNonPersonalizedAdsOnly: true,
  //   keywords: ['gaming', 'games'],
  // })

  // interstitial.load()

  // setTimeout(() => {
  //   interstitial.show()
  // }, 3000)
}

setup()

export const AdsProvider = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>
}
