import React, {Component} from 'react'
import MapGL, {NavigationControl} from 'react-map-gl'

const TOKEN = process.env.MAPBOX

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
        zoom: 3,
        width: 700,
        height: 600
      }
    }
  }
  render () {
    // const {viewport} = this.state;
    return (
      <MapGL
        // {...viewport}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}/>
        </div>
      </MapGL>
    )
  }
}
