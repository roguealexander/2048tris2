import { Svg, Circle } from 'react-native-svg'

export const IconSVG = ({ size = 64 }: { size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Circle cx="15" cy="22" r="10" fill="#EDC22D" />
      <Circle cx="11" cy="7.5" r="5" fill="#F9E5CD" />
      <Circle cx="23" cy="7" r="7" fill="#FE975C" />
    </Svg>
  )
}
