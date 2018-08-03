import React, {Segment} from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <Segment>
      <Navbar />
      <Routes />
    </Segment>
  )
}

export default App
