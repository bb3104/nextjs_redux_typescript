import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../state/ducks/counts/actions'
import Examples from '../views/components/examples'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  private timer: NodeJS.Timer

  componentDidMount () {
    const { props } = this as any
    const { dispatch } = props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <Examples />
  }
}

export default connect()(Index)
