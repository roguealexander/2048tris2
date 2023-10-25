import {
  Adapt,
  Avatar,
  Button,
  ButtonProps,
  Popover,
  Separator,
  SizableText,
  StackProps,
  Theme,
  XStack,
  YStack,
  getTokens,
  useThemeName,
} from '@my/ui'
import { Menu, Plus } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { useRouter as useNextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'
import { NavTabs } from './components/nav-tabs.web'

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

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
        {children}
      </YStack>
    </YStack>
  )
}
