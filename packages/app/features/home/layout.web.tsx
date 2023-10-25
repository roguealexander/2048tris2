import { Show, observer } from '@legendapp/state/react'
import { SizableText, XStack, YStack } from '@my/ui'
import { appState$ } from 'app/appState'
import { colors } from 'app/colors'

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

const Tabs = observer(() => {
  return (
    <XStack zi={10} h="$4" px="$4" gap="$4" w="100%" ai="center">
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('2048tris')}
      >
        <Show if={appState$.tab.get() === '2048tris'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[2048]} />
        </Show>
        <SizableText size="$5" zi={2}  color={appState$.tab.get() === '2048tris' ? colors.background : colors.text}>
          2048tris
        </SizableText>
      </XStack>
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('rules')}
      >
        <Show if={appState$.tab.get() === 'rules'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
        </Show>
        <SizableText zi={2} color={appState$.tab.get() === 'rules' ? colors.background : colors.text}>How to Play</SizableText>
      </XStack>
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('leaderboard')}
      >
        <Show if={appState$.tab.get() === 'leaderboard'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[16]} />
        </Show>
        <SizableText zi={2} color={appState$.tab.get() === 'leaderboard' ? colors.background : colors.text}>Leaderboard</SizableText>
      </XStack>
    </XStack>
  )
})

export const HomeLayout = ({ children, fullPage = false, padded = false }: HomeLayoutProps) => {
  return (
    <YStack f={1}>
      <YStack
        {...(fullPage && { flex: 1 })}
        {...(padded && {
          maxWidth: 800,
          mx: 'auto',
          px: '$2',
          width: '100%',
        })}
      >
        <Tabs />
        {children}
      </YStack>
    </YStack>
  )
}
