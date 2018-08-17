import React from 'react'
import Grid from '@material-ui/core/Grid'
import Map from './Map.jsx'
import LocationsSearch from './LocationsSearch.jsx'
import AddLocation from './AddLocation.jsx'
import AllLocations from './AllLocations.jsx'
import NoLoggedInUser from './NoLoggedInUser.jsx'
import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

const paperStyle = {
  position: 'absolute',
  width: '50%',
  height: '50%',
  backgroundColor: 'white',
  border: '3px solid',
  padding: 10
}

const modalStyle = { top: '25%', left: '25%' }

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mapLocation: {
        // label: null,
        latitude: 37.785164,
        longitude: -100}
      //locationFormOpen: false

    }
    this.handleLocationClick = this.handleLocationClick.bind(this)
  }
  componentDidUpdate () {
    const {mapCenter} = this.props
    if (mapCenter.latitude !== this.state.mapLocation.latitude ||
      mapCenter.longitude !== this.state.mapLocation.longitude) {
      this.setState({mapLocation: mapCenter})
    }
    // check if user is logged in
    // logged in with no locations or not logged in
    // navigator position if allowed or default
    //
  }
  handleLocationClick () {
    // this is the clcikhandler in location list
  }

  render () {
    return (
      <div>
        <Grid container alignItems="stretch" spacing={0}>
          <Grid item xs={3}>
            {/*this.props.userLoggedIn ? <Locations clickHandler={this.handleLocationClick}/> : <NoLoggedInUser />*/}
            <LocationsSearch handleSearchClick={this.props.handleSearchClick} />
            <AllLocations />
            <AddLocation />
          </Grid>
          <Grid item xs={9}>
            <Map mapCenter={this.state.mapLocation}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}
