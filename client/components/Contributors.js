import React, {Component} from 'react'
import axios from 'axios'
import {Segment, Header, Image} from 'semantic-ui-react'

class Contributors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRepo: {}
    }
  }

  async componentDidMount() {
    const {owner, repo} = this.props
    const {data} = await axios.get(`/api/repos/${owner}/${repo}`)
    this.setState({currentRepo: data})
  }

  async componentDidUpdate(prevProps) {
    const {owner, repo} = this.props
    if (owner !== prevProps.owner || repo !== prevProps.repo) {
      const {data} = await axios.get(`/api/repos/${owner}/${repo}`)
      this.setState({currentRepo: data})
    }
  }

  render() {
    const {currentRepo} = this.state
    const {name, owner, avatarUrl, ownerUrl, repoUrl, description} = currentRepo
    return (
      <Segment padded>
        <Header as="h1" block>
          <a href={repoUrl}>{name}</a> by <a href={ownerUrl}>{owner}</a>
        </Header>
        <Image src={avatarUrl} size="mini" floated="left" />
        <p style={styles.font}>{description}</p>
      </Segment>
    )
  }
}

const styles = {
  font: {
    fontFamily: 'Do Hyeon',
    fontSize: '20px'
  }
}

export default Contributors
