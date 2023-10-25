import { createInterFont } from '@tamagui/font-inter'
import { createCourierPrimeFont } from '@tamagui-google-fonts/courier-prime'

export const headingFont = createInterFont(
  {
    size: {
      6: 15,
    },
    transform: {
      6: 'uppercase',
      7: 'none',
    },
    weight: {
      3: '500',
      4: '700',
    },
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => size,
    sizeLineHeight: (fontSize) => fontSize + 4,
  }
)

export const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => size + 5,
  }
)

export const courierPrimeFont = createCourierPrimeFont(
  {
    face: {
      '400': {
        normal: 'CourierPrime',
        italic: 'CourierPrimeBold',
      },
      '700': {
        normal: 'CourierPrimeItalic',
        italic: 'CourierPrimeBoldItalic',
      },
    },
  },
  {
    // customize the size and line height scaling to your own needs
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => size + 5,
  }
)
