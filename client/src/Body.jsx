import React from 'react'
import Landing from './components/Landing.jsx'
import Main from './components/Main.jsx'

export default class Body extends React.Component {
  constructor (props) {
    super(props)
    this.pageSelector = this.pageSelector.bind(this)
  }
  pageSelector (props) {
    if (props.userIsLoggedIn || props.mapLocation.latitude || props.mapLocation.longitude) {
      let {mapLocation} = this.props
      if (!mapLocation.latitude || !mapLocation.longitude) {
        mapLocation.latitude = 36.3328
        mapLocation.longitude = -85.4581
      }
      return (<Main {...props}
        mapLocation={mapLocation}
        handleLocationClick={this.props.handleLocationClick}
        userIsLoggedIn={this.props.userIsLoggedIn}
        userInfo={this.props.userInfo}
        addLocation={this.props.addLocation}
        deleteLocation={this.props.deleteLocation} />)
    } else {
      return (<Landing />)
    }
  }

  render () {
    return this.pageSelector(this.props)
  }
}
