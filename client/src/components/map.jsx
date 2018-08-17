import React, {Component} from 'react'
import MapGL, {NavigationControl, Layer} from 'react-map-gl'

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        width: 900,
        height: 600
      }
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.mapLocation.longitude !== this.props.mapLocation.longitude ||
      prevProps.mapLocation.latitude !== this.props.mapLocation.latitude) {
      this.setState({viewport:
        {
          latitude: this.props.mapLocation.latitude,
          longitude: this.props.mapLocation.longitude,
          zoom: 8,
          width: this.state.viewport.width,
          height: this.state.viewport.height
        }
      })
    }
  }

  render () {
    return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken={process.env.MAPKEY}>
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
        </div>
      </MapGL>
    )
  }
}
