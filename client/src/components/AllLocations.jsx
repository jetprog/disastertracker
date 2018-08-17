import React from 'react';
import Location from './Location.jsx'


export default class AllLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
      <h1>All Locations List</h1>
      <Location />
      </div>
    )
  }
}