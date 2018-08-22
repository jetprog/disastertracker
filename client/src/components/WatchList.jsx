import React from 'react'
import WatchListCard from './WatchListCard.jsx'

export default class WatchList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }


  render () {
    return (
      <div>
        <h1>
          {this.props.userInfo === null
            ? 'Locations List'
            : `${this.props.userInfo.first_name}'s Locations`}
        </h1>
        <div>
          {this.props.userInfo !== null ? this.props.userInfo.locations.map((location, i) =>
          <WatchListCard location={location} handleLocationClick={this.props.handleLocationClick} key={i} /> ) : ''}
        </div>
      </div>
    )
  }
}


