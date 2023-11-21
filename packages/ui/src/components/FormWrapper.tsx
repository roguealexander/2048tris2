import { forwardRef } from 'react'
import { TamaguiElement, YStack, YStackProps, withStaticProperties } from 'tamagui'

/**
 * this is pretty straightforward on web - check FormWrapper.native
 */
const Wrapper = forwardRef<TamaguiElement, YStackProps>(function Wrapper(props, ref) {
  return <YStack ref={ref} gap="$3" flex={1} jc="center" width="100%" als="center" {...props} />
})

const Body = forwardRef<TamaguiElement, YStackProps>(function Body(props, ref) {
  return <YStack p="$3" ref={ref} gap="$3" w="100%" {...props} />
})

const Footer = forwardRef<TamaguiElement, YStackProps>(function Footer(props, ref) {
  return <YStack ref={ref} pb="$3" px="$3" gap="$3" {...props} />
})

export const FormWrapper = withStaticProperties(Wrapper, {
  Body,
  Footer,
})
