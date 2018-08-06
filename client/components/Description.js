import React from 'react'
import {Segment} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const Description = () => {
  return (
    <Segment padded floated="left" style={{fontSize: '20px'}}>
      Welcome to GitMap! 27 million software developers currently collaborate on{' '}
      <a href="https://github.com/">Github</a> across 200 countries.<a href="https://techcrunch.com/2018/06/03/microsoft-is-reportedly-acquiring-github/">
        *
      </a>{' '}
      GitMap plots the locations of contributors to any open-source project on a
      map, so you can see all the people that came together to make amazing
      things happen.
    </Segment>
  )
}

export default Description
