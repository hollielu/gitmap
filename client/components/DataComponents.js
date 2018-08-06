import React from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import {WordCloud, RepoInfo, PieChart, MapInfo, GitHubLink} from '../components'

/**
 * COMPONENT
 */

const DataComponents = ({users, owner, repo}) => {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <MapInfo />
          <RepoInfo owner={owner} repo={repo} />
          <GitHubLink />
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <PieChart users={users} />
          </Segment>

          <Segment>
            <WordCloud owner={owner} repo={repo} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DataComponents
