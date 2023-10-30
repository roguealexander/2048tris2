import { Show, observer } from '@legendapp/state/react'
import { TSizableText, XStack, YStack } from '@my/ui'
import { UserCircle2 } from '@tamagui/lucide-icons'
import { appState$ } from 'app/appState'
import { colors } from 'app/colors'

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

const Tabs = observer(() => {
  return (
    <XStack
      zi={10}
      h="$4"
      px="$4"
      maw="100%"
      flexWrap="wrap"
      gap="$4"
      ai="center"
      pos="absolute"
      t={0}
      l={16}
      r={16}
    >
      <XStack fullscreen o={0.9} bg="$background" />
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
        <TSizableText
          size="$5"
          zi={2}
          color={appState$.tab.get() === '2048tris' ? colors.background : colors.text}
        >
          2048tris
        </TSizableText>
      </XStack>
      <XStack
        h="$3"
        px="$3"
        ai="center"
        pos="relative"
        cursor="pointer"
        onPress={() => appState$.tab.set('how-to-play')}
      >
        <Show if={appState$.tab.get() === 'how-to-play'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[64]} />
        </Show>
        <TSizableText
          zi={2}
          color={appState$.tab.get() === 'how-to-play' ? colors.background : colors.text}
        >
          How to Play
        </TSizableText>
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
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[32]} />
        </Show>
        <TSizableText
          zi={2}
          color={appState$.tab.get() === 'leaderboard' ? colors.background : colors.text}
        >
          Leaderboard
        </TSizableText>
      </XStack>
      <XStack
        ml="auto"
        h="$3"
        w="$3"
        ai="center"
        jc="center"
        pos="relative"
        cur="pointer"
        onPress={() => appState$.tab.set('user')}
      >
        <Show if={appState$.tab.get() === 'user'}>
          <XStack fullscreen h="$3" px="$3" ai="center" bg={colors.tile[16]} />
        </Show>
        <UserCircle2
          style={{ zIndex: 2 }}
          color={appState$.tab.get() === 'user' ? colors.background : colors.text}
        />
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
        alignItems="center"
        justifyContent="flex-start"
      >
        <Tabs />
        {children}
      </YStack>
    </YStack>
  )
}
