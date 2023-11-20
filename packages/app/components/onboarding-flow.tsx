import { observer } from '@legendapp/state/react'
import { TButton, TSizableText, XStack, YStack } from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { appState$ } from 'app/appState'
import { IconSVG } from './icon-svg'
import { observable } from '@legendapp/state'
import {
  CombineExample,
  DropExample,
  DropExampleText,
  HoldExample,
  HoldExampleText,
} from './how-to-play-tab'
import { colors } from 'app/colors'
import { Tile } from './tile'
import { TileSize } from 'app/types'
import { AuthComponent } from 'app/features/auth/auth-component'
// import { Platform, KeyboardAvoidingView } from 'react-native'

type OnboardingStep = 'drop' | 'hold' | 'combine' | 'score' | 'user'
const onboardingStep = observable<OnboardingStep>('drop')
const size2048 = observable<TileSize>('2048')

export const OnboardingFlow = observer(() => {
  const onboarded = appState$.onboarded.get()
  const step = onboardingStep.get()
  const scale = appState$.scale.get()
  const nextStep = () => {
    switch (step) {
      case 'drop':
        onboardingStep.set('hold')
        break
      case 'hold':
        onboardingStep.set('combine')
        break
      case 'combine':
        onboardingStep.set('score')
        break
      case 'score':
        onboardingStep.set('user')
        break
      case 'user':
        appState$.onboarded.set(true)
        break
    }
  }

  if (onboarded) return null

  return (
    <YStack fullscreen bg="$background" zi={50} ai="center" padding={24}>
      <XStack ai="center" jc="center">
        <IconSVG size={80} />
        <TSizableText size="$5">2048tris</TSizableText>
      </XStack>
      <YStack f={1} ai="flex-start" jc="center" width={450 * scale} gap={32}>
        {step === 'drop' && (
          <>
            <TSizableText textAlign="center" alignSelf="center">
              Welcome to 2048tris, here is a quick{' '}
              <TSizableText fontWeight="bold">interactive</TSizableText> tutorial to get you
              started.
            </TSizableText>
            <TSizableText fontStyle="italic" textAlign="center" alignSelf="center">
              Thanks for trying out the game!
            </TSizableText>
            <XStack w="100%" h={2} bw={0} bbw={2} borderStyle="dashed" boc="$border" />
            <TSizableText>
              Drop tiles in the game area. The value of each tile dropped is added to your score.
            </TSizableText>
            <XStack w="100%" bg={colors.tile[2]} px={8} py={16} ai="center" jc="center">
              <DropExampleText />
            </XStack>
            <DropExample />
          </>
        )}
        {step === 'hold' && (
          <>
            <TSizableText>
              The active tile can be put into the hold and saved for later
            </TSizableText>
            <XStack w="100%" bg={colors.tile[2]} px={8} py={16} ai="center" jc="center">
              <HoldExampleText />
            </XStack>
            <HoldExample />
          </>
        )}
        {step === 'combine' && (
          <>
            <TSizableText>
              When tiles of the same size collide, they combine into a larger tile.
            </TSizableText>

            <CombineExample />
          </>
        )}
        {step === 'score' && (
          <>
            <YStack w="100%" ai="center" gap={90}>
              <TSizableText>Combine tiles to create the games namesake:</TSizableText>
              <Tile size={size2048} />
              <TSizableText>
                Once you{"'"}ve made it, you can try going for high scores, high efficiency scores,
                or even try your hand at speedrunning. Check the leaderboard tab see whats possible.
                (and where you might stand)
              </TSizableText>
            </YStack>
          </>
        )}
        {step === 'user' && (
          <>
            <TSizableText>
              Your scores are stored locally, but you can create an account so you can join the
              leaderboard. (no email or phone number needed, no data stored)
            </TSizableText>
            <YStack f={0} w="100%">
              <AuthComponent />
            </YStack>
          </>
        )}
      </YStack>
      <TButton onPress={nextStep}>
        {step === 'user' ? 'PLAY' : 'NEXT'} <ChevronRight color="$background" />
      </TButton>
    </YStack>
  )
})
