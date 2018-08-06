import React, {Component} from 'react'
import axios from 'axios'
import {TagCloud} from 'react-tagcloud'
import {Header} from 'semantic-ui-react'

/**
 * COMPONENT
 */

class WordCloud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: []
    }
    this.reformatData = this.reformatData.bind(this)
  }

  async componentDidMount() {
    const {owner, repo} = this.props
    const {data} = await axios.get(`/api/repos/${owner}/${repo}/languages`)
    this.setState({
      languages: this.reformatData(data)
    })
  }

  async componentDidUpdate(prevProps) {
    const {owner, repo} = this.props
    if (owner !== prevProps.owner || repo !== prevProps.repo) {
      const {data} = await axios.get(`/api/repos/${owner}/${repo}/languages`)
      this.setState({
        languages: this.reformatData(data)
      })
    }
  }

  reformatData = data => {
    const keys = Object.keys(data)
    const values = Object.values(data)
    let languages = []
    for (let i = 0; i < keys.length; i++) {
      languages.push({value: keys[i], count: values[i]})
    }
    return languages
  }

  render() {
    const {languages} = this.state
    return (
      <div>
        <Header as="h1" block>
          Languages Used
        </Header>
        <TagCloud
          minSize={16}
          maxSize={45}
          tags={languages}
          colorOptions={styles.options}
          style={styles.tagCloud}
        />
      </div>
    )
  }
}

/**
 * STYLES
 */

const styles = {
  options: {
    hue: 'blue',
    fontFamily: 'Do Hyeon'
  },
  tagCloud: {
    textAlign: 'center',
    fontFamily: 'Do Hyeon',
    padding: 30
  }
}

export default WordCloud
