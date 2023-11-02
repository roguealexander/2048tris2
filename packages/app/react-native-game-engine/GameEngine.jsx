import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import DefaultTimer from './DefaultTimer'
import DefaultRenderer from './DefaultRenderer'
import DefaultTouchProcessor from './DefaultTouchProcessor'
import { Stack } from '@my/ui'

const getEntitiesFromProps = (props) =>
  props.initState ||
  props.initialState ||
  props.state ||
  props.initEntities ||
  props.initialEntities ||
  props.entities

const isPromise = (obj) => {
  return !!(obj && obj.then && obj.then.constructor && obj.then.call && obj.then.apply)
}

export default class GameEngine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entities: null,
    }
    this.timer = props.timer || new DefaultTimer()
    this.timer.subscribe(this.updateHandler)
    this.touches = []
    this.screen = Dimensions.get('window')
    this.previousTime = null
    this.previousDelta = null
    this.events = []
    this.touchProcessor = props.touchProcessor(this.touches)
    this.layout = null
  }

  async componentDidMount() {
    let entities = getEntitiesFromProps(this.props)

    if (isPromise(entities)) entities = await entities

    this.setState(
      {
        entities: entities || {},
      },
      () => {
        if (this.props.running) this.start()
      }
    )
  }

  componentWillUnmount() {
    this.stop()
    this.timer.unsubscribe(this.updateHandler)
    if (this.touchProcessor.end) this.touchProcessor.end()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.running !== this.props.running) {
      if (nextProps.running) this.start()
      else this.stop()
    }
  }

  clear = () => {
    this.touches.length = 0
    this.events.length = 0
    this.previousTime = null
    this.previousDelta = null
  }

  start = () => {
    this.clear()
    this.timer.start()
    this.dispatch({ type: 'started' })
  }

  stop = () => {
    this.timer.stop()
    this.dispatch({ type: 'stopped' })
  }

  swap = async (newEntities) => {
    if (isPromise(newEntities)) newEntities = await newEntities

    this.setState({ entities: newEntities || {} }, () => {
      this.clear()
      this.dispatch({ type: 'swapped' })
    })
  }

  publish = (e) => {
    this.dispatch(e)
  }

  publishEvent = (e) => {
    this.dispatch(e)
  }

  dispatch = (e) => {
    // eslint-disable-next-line
    setTimeout(() => {
      this.events.push(e)
      if (this.props.onEvent) this.props.onEvent(e)
    }, 0)
  }

  dispatchEvent = (e) => {
    this.dispatch(e)
  }

  updateHandler = (currentTime) => {
    let args = {
      touches: this.touches,
      screen: this.screen,
      layout: this.layout,
      events: this.events,
      dispatch: this.dispatch,
      time: {
        current: currentTime,
        previous: this.previousTime,
        delta: currentTime - (this.previousTime || currentTime),
        previousDelta: this.previousDelta,
      },
    }

    let newState = this.props.systems.reduce((state, sys) => sys(state, args), this.state.entities)

    this.touches.length = 0
    this.events.length = 0
    this.previousTime = currentTime
    this.previousDelta = args.time.delta
    this.setState({ entities: newState })
  }

  onLayoutHandler = (e) => {
    this.screen = Dimensions.get('window')
    this.layout = e.nativeEvent.layout
    this.forceUpdate()
  }

  onTouchStartHandler = (e) => {
    this.touchProcessor.process('start', e.nativeEvent)
  }

  onTouchMoveHandler = (e) => {
    this.touchProcessor.process('move', e.nativeEvent)
  }

  onTouchEndHandler = (e) => {
    this.touchProcessor.process('end', e.nativeEvent)
  }

  render() {
    return (
      <Stack f={1} style={this.props.style} onLayout={this.onLayoutHandler}>
        <Stack
          f={1}
          onTouchStart={this.onTouchStartHandler}
          onTouchMove={this.onTouchMoveHandler}
          onTouchEnd={this.onTouchEndHandler}
        >
          {this.props.renderer(this.state.entities, this.screen, this.layout)}
        </Stack>

        <Stack pointerEvents={'box-none'} fullscreen>
          {this.props.children}
        </Stack>
      </Stack>
    )
  }
}

GameEngine.defaultProps = {
  systems: [],
  entities: {},
  renderer: DefaultRenderer,
  touchProcessor: DefaultTouchProcessor({
    triggerPressEventBefore: 200,
    triggerLongPressEventAfter: 700,
  }),
  running: true,
}
