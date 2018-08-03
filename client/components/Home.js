import React from 'react'
import {Container, Segment} from 'semantic-ui-react'
import {Map, DataMap} from '../components'

const Home = () => {
  return (
    <Container style={{marginTop: 10, marginBottom: 10}}>
      <Segment>
        <Map />
      </Segment>
    </Container>
  )
}

export default Home
