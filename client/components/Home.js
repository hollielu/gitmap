import React, {Component} from 'react'
import {Container, Segment} from 'semantic-ui-react'
import Map from './Map'
import axios from 'axios'
import Geocode from 'react-geocode'
import Search from './Search'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      owner: '',
      repo: '',
      coordinates: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async () => {
    const {owner, repo} = this.state

    const {data} = await axios.get(`/api/repos/${owner}/${repo}/contributors`)

    let coordinates = []

    for (let i = 0; i < data.length; i++) {
      let res = await axios.get(`/api/users/${data[i]}/location`)
      if (res.data) {
        Geocode.fromAddress(res.data).then(
          res => {
            const {lat, lng} = res.results[0].geometry.location
            coordinates.push([lat, lng])
          },
          error => {
            console.error(error)
          }
        )
      }
    }
    this.setState({repo: '', owner: '', coordinates})
  }

  render() {
    return (
      <div>
        <Container style={{marginTop: 10, marginBottom: 10}}>
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            owner={this.state.owner}
            repo={this.state.repo}
          />
          <Segment>
            <Map coordinates={this.state.coordinates} />
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Home
