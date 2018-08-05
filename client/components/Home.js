import React, {Component} from 'react'
import {Container, Segment, Grid} from 'semantic-ui-react'
import axios from 'axios'
import Geocode from 'react-geocode'
import {Search, Info, Map, WithData} from '../components'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      owner: '',
      repo: '',
      coordinates: [],
      users: []
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

    const {locations, users} = data

    const locationP = locations.map(async user => {
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

    this.setState({coordinates, users})
  }

  render() {
    const {owner, repo, coordinates, users} = this.state
    return (
      <Container style={{marginTop: 10, marginBottom: 10}}>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Info />
            </Grid.Column>

            <Grid.Column>
              <Search
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                owner={owner}
                repo={repo}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Segment>
          <Map coordinates={coordinates} />
        </Segment>

        {coordinates.length > 1 ? (
          <WithData users={users} owner={owner} repo={repo} />
        ) : (
          ''
        )}
      </Container>
    )
  }
}

export default Home
