export default class DefaultTimer {
  loopId: number | null
  subscribers: Array<(currentTime: number) => void>

  constructor() {
    this.loopId = null
    this.subscribers = []
  }

  loop = (time?: number) => {
    if (this.loopId && time != null) {
      this.subscribers.forEach((callback) => {
        callback(time)
      })
    }

    // eslint-disable-next-line
    this.loopId = requestAnimationFrame(this.loop)
  }

  start() {
    if (!this.loopId) {
      this.loop()
    }
  }

  stop() {
    if (this.loopId) {
      // eslint-disable-next-line
      cancelAnimationFrame(this.loopId)
      this.loopId = null
    }
  }

  subscribe(callback: (currentTime: number) => void) {
    if (this.subscribers.indexOf(callback) === -1) this.subscribers.push(callback)
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter((s) => s !== callback)
  }
}
