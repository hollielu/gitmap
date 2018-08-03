import React, {Component} from 'react'
import {withRouter, Route} from 'react-router-dom'
import {Home} from './components'

class Routes extends Component {
  render() {
    return <Route path="/" component={Home} />
  }
}

export default withRouter(Routes)
