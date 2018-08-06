import React from 'react'
import {Segment, Icon, Message} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const MapInfo = () => (
  <Segment style={styles.segment}>
    <Icon size="large" name="info circle" style={styles.icon} />
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

/**
 * STYLES
 */

const styles = {
  segment: {
    fontSize: '20px',
    textAlign: 'center'
  },
  icon: {
    marginRight: 2
  }
}

export default MapInfo
