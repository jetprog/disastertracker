import React from 'react'
import Grid from '@material-ui/core/Grid'
import Map from './Map.jsx'
import Locations from './Locations.jsx'
import NoLoggedInUser from './NoLoggedInUser.jsx'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mapLocation: {
        label: null,
        latitude: null,
        longitude: null}

    }
    this.handleLocationClick = this.handleLocationClick.bind(this)
  }
  componentDidMount () {
    // check if user is logged in
    // logged in with no locations or not logged in
    // navigator position if allowed or default

  }
  handleLocationClick () {
    // this is the clcikhandler in location list
  }

  render () {
    return (
      <div>
        <Grid container alignItems="stretch" spacing={0}>
          <Grid item xs={3}>
            {this.props.userLoggedIn ? <Locations clickHandler={this.handleLocationClick}/> : <NoLoggedInUser />}
          </Grid>
          <Grid item xs={9}>
            <Map mapcenter={this.state.mapLocation}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}
