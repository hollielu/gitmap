import React, {Component} from 'react'
import MapGL, {Marker, NavigationControl} from 'react-map-gl'
import {Icon} from 'semantic-ui-react'

const mapBoxStyle = 'mapbox://styles/hollielu/cjkg03sys1azg2spljgr104u5'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
        bearing: 0,
        pitch: 0,
        width: 1100,
        height: 500
      }
    }
  }

  renderMarkers = () => {
    const {coordinates} = this.props
    return coordinates.map((coordinate, idx) => {
      return (
        <Marker key={idx} latitude={coordinate[0]} longitude={coordinate[1]}>
          <Icon name="map pin" />
        </Marker>
      )
    })
  }

  render() {
    const {viewport} = this.state
    return (
      <MapGL {...viewport} mapStyle={mapBoxStyle} mapboxApiAccessToken="">
        {this.renderMarkers()}
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
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
