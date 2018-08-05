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

    const locationP = data.map(async user => {
      const res = await axios.get(`/api/users/${user}/location`)
      if (res.data !== null) {
        return {location: res.data}
      } else {
        return {location: undefined}
      }
    })

    const locationR = await Promise.all(locationP)

    const coordinatesP = locationR
      .filter(result => result.location)
      .map(place => {
        return Geocode.fromAddress(place.location).then(
          res => {
            const {lat, lng} = res.results[0].geometry.location
            const address = res.results[0].formatted_address
            if (lat && lng && address) return [address, lat, lng]
          },
          err => {
            console.error(err)
          }
        )
      })

    let coordinates = await Promise.all(coordinatesP)
    coordinates = coordinates.filter(result => result)

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
