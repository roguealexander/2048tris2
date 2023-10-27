import { styled, Button } from 'tamagui'

export const TButton = styled(Button, {
  backgroundColor: '$btn',
  color: '$background',
  br: 0,

  hoverStyle: {
    backgroundColor: '$border',
  },
  pressStyle: {
    backgroundColor: '$border',
  },
  focusStyle: {
    backgroundColor: '$border',
  },
})
