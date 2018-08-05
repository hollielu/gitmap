import React from 'react'
import {Segment, Icon, Message} from 'semantic-ui-react'

const Action = () => {
  return (
    <Segment padded style={{fontSize: '20px'}}>
      <div style={{textAlign: 'center'}}>
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

export default Action
