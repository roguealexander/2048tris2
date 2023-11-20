export const getMinutesAndSeconds = (duration: number) => {
  let inSecs = Math.round(duration / 1000)
  const minutes = Math.floor(inSecs / 60)
  inSecs -= minutes * 60
  const seconds = inSecs
  return `${minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`
}
