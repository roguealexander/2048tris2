import { observer } from '@legendapp/state/react'
import { AnimatePresence, TButton, TSizableText, XStack, YStack, styled } from '@my/ui'
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
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
import { useUser } from 'app/utils/useUser'
// import { Platform, KeyboardAvoidingView } from 'react-native'

type OnboardingStep = 'drop' | 'hold' | 'combine' | 'score' | 'user'
const onboardingStep = observable<OnboardingStep>('drop')
const size2048 = observable<TileSize>('2048')
const direction = observable<-1 | 1 | undefined>()

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
})

export const OnboardingFlow = observer(() => {
  const onboarded = appState$.onboarded.get()
  if (onboarded) return null
  return <OnboardingFlowComponent />
})

const OnboardingFlowComponent = observer(() => {
  const { user } = useUser()
  const step = onboardingStep.get()
  const scale = appState$.scale.get()
  const dir = direction.get()

  const finalStep = user != null ? 'score' : 'user'
  const availableSteps = user != null ? [1, 2, 3, 4] : [1, 2, 3, 4, 5]

  const enterVariant = dir === 1 ? 'isRight' : dir === -1 ? 'isLeft' : 'defaultFade'
  const exitVariant = dir === 1 ? 'isLeft' : dir === -1 ? 'isRight' : 'defaultFade'

  const stepIndex =
    step === 'drop'
      ? 0
      : step === 'hold'
      ? 1
      : step === 'combine'
      ? 2
      : step === 'score'
      ? 3
      : step === 'user'
      ? 4
      : 0

  const prevStep = () => {
    direction.set(-1)

    switch (step) {
      case 'drop':
        onboardingStep.set('drop')
        break
      case 'hold':
        onboardingStep.set('drop')
        break
      case 'combine':
        onboardingStep.set('hold')
        break
      case 'score':
        onboardingStep.set('combine')
        break
      case 'user':
        onboardingStep.set('score')
        break
    }
  }
  const nextStep = () => {
    direction.set(1)

    switch (step) {
      case finalStep:
        appState$.onboarded.set(true)
        break
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

  return (
    <YStack fullscreen bg="$background" zi={50} ai="center" padding={24 * scale} gap={24}>
      <XStack ai="center" jc="center">
        <IconSVG size={80 * scale} />
        <TSizableText size="$5">2048tris</TSizableText>
      </XStack>
      <AnimatePresence exitBeforeEnter enterVariant={enterVariant} exitVariant={exitVariant}>
        <AnimatedYStack
          key={step}
          f={1}
          x={0}
          o={1}
          ai="flex-start"
          jc="center"
          gap={32}
          width={450 * scale}
          animation="100ms"
        >
          {step === 'drop' && (
            <YStack f={1} ai="flex-start" jc="center" gap={24 * scale} w="100%">
              <TSizableText textAlign="center" alignSelf="center">
                Welcome to 2048tris, here is a quick{' '}
                <TSizableText fontWeight="bold">interactive</TSizableText> tutorial to get you
                started.
              </TSizableText>
              <TSizableText fontStyle="italic" textAlign="center" alignSelf="center">
                Thanks for trying out the game!
              </TSizableText>
              <XStack w="100%" h={2} bg="$border" o={0.5} />
              <TSizableText>
                Drop tiles in the game area. The value of each tile dropped is added to your score.
              </TSizableText>
              <XStack w="100%" bg={colors.tile[2]} px={8} py={16} ai="center" jc="center" mb={-32}>
                <DropExampleText />
              </XStack>
              <DropExample />
            </YStack>
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
              <YStack w="100%" ai="center" gap={90 * scale}>
                <TSizableText>Combine tiles to create the games namesake:</TSizableText>
                <Tile size={size2048} />
                <TSizableText>
                  Once you{"'"}ve made it, you can try going for high scores, high efficiency
                  scores, or even try your hand at speedrunning. Check the leaderboard tab see whats
                  possible. (and where you might stand)
                </TSizableText>
              </YStack>
            </>
          )}
          {step === 'user' && (
            <>
              <TSizableText>
                Your scores are stored locally, but you can optionally create an account and join
                the leaderboard. (no email or phone number needed, no data stored)
              </TSizableText>
              {user == null && <AuthComponent />}
            </>
          )}
        </AnimatedYStack>
      </AnimatePresence>
      <YStack width={225 * scale} gap={8} jc="center" ai="center">
        <XStack gap={8} jc="center">
          {availableSteps.map((index) => (
            <XStack key={index} bg="$btn" w={8} h={4} o={index <= stepIndex ? 1 : 0.5} />
          ))}
          <XStack
            pos="absolute"
            l={0}
            x={16 * stepIndex - 4}
            t={-2}
            animation="200ms"
            w={16}
            h={8}
            bw={0}
            bg="$btn"
          />
        </XStack>
        <XStack gap={4} w="100%">
          <TButton
            onPress={prevStep}
            w={44}
            p={0}
            o={step === 'drop' ? 0.3 : 1}
            pe={step === 'drop' ? 'none' : 'auto'}
          >
            <ChevronLeft color="$background" />
          </TButton>
          <TButton onPress={nextStep} w="75%">
            {step === finalStep ? 'START' : 'NEXT'}
            {step !== finalStep && <ChevronRight color="$background" />}
          </TButton>
        </XStack>
      </YStack>
    </YStack>
  )
})
