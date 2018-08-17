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
      <h1>All Locations List</h1>
      <Location handleLocationClick={this.props.handleLocationClick} />
      </div>
    )
  }
}