import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { ThemePreference, setThemePreference } from '@vonovak/react-native-theme-control'
import { StatusBar } from 'expo-status-bar'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { AppState, ColorSchemeName, useColorScheme } from 'react-native'

// PREVENT IMPORT OF NEXT_THEME

interface UseThemeProps {
  /** List of all available theme names */
  themes: string[]
  /** Forced theme name for the current page */
  forcedTheme?: string
  /** Update the theme */
  set: (theme: string) => void
  toggle: () => void
  /** Active theme name - will return "system" if not overriden, see "resolvedTheme" for getting resolved system value */
  current?: string
  /** @deprecated Use `current` instead (deprecating avoid confusion with useTheme) */
  theme?: string
  /** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  resolvedTheme?: string
  /** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
  systemTheme?: 'dark' | 'light'
}

interface ValueObject {
  [themeName: string]: string
}

interface ThemeProviderProps {
  children?: any
  /** List of all available theme names */
  themes?: string[]
  /** Forced theme name for the current page */
  forcedTheme?: string
  /** Whether to switch between dark and light themes based on prefers-color-scheme */
  enableSystem?: boolean
  systemTheme?: string
  /** Disable all CSS transitions when switching themes */
  disableTransitionOnChange?: boolean
  /** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
  enableColorScheme?: boolean
  /** Key used to store theme setting in localStorage */
  storageKey?: string
  /** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
  defaultTheme?: string
  /** HTML attribute modified based on the active theme. Accepts `class` and `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.) */
  attribute?: string | 'class'
  /** Mapping of theme name to HTML attribute value. Object where key is the theme name and value is the attribute value */
  value?: ValueObject
  onChangeTheme?: (name: string) => void

  // avoids warning
  skipNextHead?: boolean
}

export const ThemeContext = createContext<
  (ThemeProviderProps & { current: ThemeName | null }) | null
>(null)

type ThemeName = 'light' | 'dark' | 'system'

export const UniversalThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeContext = useMemo(() => {
    const set = (val: string) => {
      setThemePreference(val as ThemePreference)
    }

    return {
      set,
      themes: ['light'],
      onChangeTheme: set,
      current: 'light' as const,
      systemTheme: 'light',
    }
  }, [])

  return (
    <ThemeContext.Provider value={themeContext}>
      <InnerProvider>{children}</InnerProvider>
    </ThemeContext.Provider>
  )
}

const InnerProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useThemeSetting()

  return (
    <ThemeProvider value={resolvedTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      {children}
    </ThemeProvider>
  )
}

export const useThemeSetting = (): UseThemeProps => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeSetting should be used within the context provider.')
  }

  const outputContext: UseThemeProps = {
    ...context,
    systemTheme: context.systemTheme as 'light' | 'dark',
    themes: context.themes!,
    current: context.current ?? 'system',
    resolvedTheme: context.current === 'system' ? context.systemTheme : context.current ?? 'system',
    set: (value) => {
      context.onChangeTheme?.(value)
    },
    toggle: () => {
      const map = {
        light: 'dark',
        dark: 'system',
        system: 'light',
      }
      context.onChangeTheme?.(map[context.current ?? 'system'])
    },
  }

  return outputContext
}

export const useRootTheme = () => {
  const context = useThemeSetting()
  return [context.current === 'system' ? context.systemTheme : context.current, context.set]
}

// fix flash of wrong theme on iOS:
// https://github.com/bluesky-social/social-app/pull/1417
// wait on merge from react-native to remove:
// https://github.com/facebook/react-native/pull/39439
function useNonFlickeringColorScheme() {
  const colorSchemeFromRN = useColorScheme()
  const [nonFlickerScheme, setNonFlickerScheme] = useState<ColorSchemeName>(colorSchemeFromRN)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      const isActive = state === 'active'
      if (!isActive) return
      setNonFlickerScheme(colorSchemeFromRN)
    })

    return () => {
      subscription.remove()
    }
  }, [colorSchemeFromRN])

  return nonFlickerScheme || 'system'
}
