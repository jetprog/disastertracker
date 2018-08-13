import React, {Component} from 'react'
import MapGL, {NavigationControl} from 'react-map-gl'

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3,
        width: 900,
        height: 600
      }
    }
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={process.env.MAPKEY}>
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
        </div>
     </MapGL>
    );
  }
}
