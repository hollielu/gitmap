import React, {Component} from 'react'
import MapGL, {Marker, NavigationControl} from 'react-map-gl'

const mapBoxStyle = 'mapbox://styles/hollielu/cjkg03sys1azg2spljgr104u5'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      zoom: 0,
      bearing: 0,
      pitch: 0,
      width: 1100,
      height: 500
    }
    this.renderMarkers = this.renderMarkers.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (latitude, longitude) => {
    this.setState({latitude, longitude, zoom: 5})
  }

  renderMarkers = () => {
    const {coordinates} = this.props
    return coordinates.map((coordinate, idx) => {
      return (
        <div key={idx}>
          <Marker latitude={coordinate[1]} longitude={coordinate[2]}>
            <img
              src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
              height="50"
              width="50"
              onClick={() => this.handleClick(coordinate[1], coordinate[2])}
            />
          </Marker>
        </div>
      )
    })
  }

  render() {
    return (
      <MapGL
        {...this.state}
        mapStyle={mapBoxStyle}
        mapboxApiAccessToken="pk.eyJ1IjoiaG9sbGllbHUiLCJhIjoiY2prZnFyamlmMGM0ZTN4bXlhdnFoaGt3YiJ9.I8wRnROtntC4znYg15Td5g"
        onViewportChange={viewport => this.setState({...viewport})}
      >
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl
            onViewportChange={viewport => this.setState({...viewport})}
          />
        </div>
        {this.renderMarkers()}
      </MapGL>
    )
  }
}

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

export default Map
