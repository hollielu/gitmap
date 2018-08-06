import React from 'react'
import {Segment, Icon, Message} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const GitHubLink = () => {
  return (
    <Segment padded style={styles.segment}>
      <div style={styles.div}>
        <Icon size="large" name="github" />
      </div>
      <Message>
        If you're feeling inspired, head over to{' '}
        <a href="https://github.com/">Github</a> and make a contribution to an{' '}
        <a href="https://github.com/open-source">open-source</a> project.
      </Message>
    </Segment>
  )
}

/**
 * STYLES
 */

const styles = {
  segment: {
    fontSize: '20px'
  },
  div: {
    textAlign: 'center'
  }
}

export default GitHubLink
