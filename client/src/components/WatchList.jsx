import React from 'react'
import WatchListCard from './WatchListCard.jsx'

export default class WatchList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  // MAP THROUGH ALL LOCATIONS COMPONENT

  render () {
    return (
      <div>
        <h1>
          {this.props.userInfo === null
            ? 'Locations List'
            : `${this.props.userInfo.first_name}'s Locations`}
        </h1>
        <WatchListCard handleLocationClick={this.props.handleLocationClick} />
      </div>
    )
  }
}
