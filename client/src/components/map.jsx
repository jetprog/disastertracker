import React from 'react';
import GoogleMapReact from 'google-map-react';

const MAPKEY = process.env.MAPKEY;

const Location = ({ text }) => <div>{text}</div>;


export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
    }
  }

  render() {
    return(
      <div style={{ height: '100vh', width: '100%' }}>

      <GoogleMapReact
          bootstrapURLKeys={{ key: MapKEY}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Location
            lat={59.955413}
            lng={30.337844}
            text={'Test'}
          />
        </GoogleMapReact>
      </div>
      );
  }
}
