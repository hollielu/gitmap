import React from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import {WordCloud, Contributors, ChartPie, MapInfo, Action} from '../components'

const WithData = ({users, owner, repo}) => {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <MapInfo />
          <Contributors owner={owner} repo={repo} />
          <Action />
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <ChartPie users={users} />
          </Segment>

          <Segment>
            <WordCloud owner={owner} repo={repo} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default WithData
