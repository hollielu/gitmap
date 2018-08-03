import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getContributorsLocations} from '../store/'
import {Input, Button} from 'semantic-ui-react'

const mapDispatch = dispatch => ({
  getContributorsLocations: data => dispatch(getContributorsLocations(data))
})

class Search extends Component {
  constructor() {
    super()
    this.state = {
      owner: '',
      repo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = () => {
    const {getContributorsLocations} = this.props
    const {owner, repo} = this.state
    getContributorsLocations({owner, repo})
    this.setState({repo: '', owner: ''})
  }

  render() {
    return (
      <div>
        <Input
          name="owner"
          placeholder="Search users..."
          onChange={this.handleChange}
          value={this.state.owner}
        />
        <Input
          name="repo"
          placeholder="Search repos..."
          onChange={this.handleChange}
          value={this.state.repo}
          style={{paddingRight: 10}}
        />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatch)(Search)
