import React, {Component} from 'react'
import axios from 'axios'
import {TagCloud} from 'react-tagcloud'
import {Header} from 'semantic-ui-react'

class WordCloud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: []
    }
  }

  async componentDidMount() {
    const {owner, repo} = this.props
    const {data} = await axios.get(`/api/repos/${owner}/${repo}/languages`)

    // reformat data
    const keys = Object.keys(data)
    const values = Object.values(data)
    let languages = []
    for (let i = 0; i < keys.length; i++) {
      languages.push({value: keys[i], count: values[i]})
    }

    this.setState({languages})
  }

  render() {
    return (
      <div>
        <Header as="h1" style={styles.font} block>
          Languages Used
        </Header>
        <TagCloud
          minSize={16}
          maxSize={45}
          tags={this.state.languages}
          colorOptions={styles.options}
          style={{textAlign: 'center', fontFamily: 'Do Hyeon', padding: 30}}
        />
      </div>
    )
  }
}

const styles = {
  options: {
    hue: 'blue',
    fontFamily: 'Do Hyeon'
  },
  font: {
    fontFamily: 'Do Hyeon'
  }
}

export default WordCloud
