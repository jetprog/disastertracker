import React from 'react';
import Location from './Location.jsx'


export default class AllLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

//MAP THROUGH ALL LOCATIONS COMPONENT

  render() {
    return(
      <div>
      <h1>{this.props.userInfo.first_name === null ? 'Locations List' : `${this.props.userInfo.first_name}'s Locations`}</h1>
      <Location handleLocationClick={this.props.handleLocationClick} />
      </div>
    )
  }
}