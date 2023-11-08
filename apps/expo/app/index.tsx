import HomeScreen from 'app/features/home/screen'
import { Stack, useRouter } from 'expo-router'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, height: 500, backgroundColor: 'red' }}>
      <Stack.Screen
        options={{
          title: 'HOME',
        }}
      />
      <View style={{ flex: 1, height: 500, backgroundColor: 'blue' }}>
        <Text>HELLO THERE</Text>
      </View>
      {/* <HomeScreen /> */}
    </View>
  )
}
