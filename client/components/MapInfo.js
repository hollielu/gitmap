import React from 'react'
import {Segment, Icon, Message} from 'semantic-ui-react'

const MapInfo = () => (
  <Segment style={{fontSize: '20px', textAlign: 'center'}}>
    <Icon size="large" name="info circle" style={{marginRight: 2}} />
    <Message>
      Click a{' '}
      <img
        src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
        height="30"
        width="30"
      />{' '}
      on the map above to zoom in on a location.
    </Message>
  </Segment>
)

export default MapInfo
