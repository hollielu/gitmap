import React from 'react'
import {Segment} from 'semantic-ui-react'

const Contributors = () => {
  return (
    <Segment padded floated="left" style={{fontSize: '20px'}}>
      Click on a{' '}
      <img
        src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
        height="40"
        width="40"
      />{' '}
      on the map to zoom in on a location.
    </Segment>
  )
}

export default Contributors
