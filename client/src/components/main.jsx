import React from 'react'
import Grid from '@material-ui/core/Grid'
import Map from './Map.jsx'
import WatchListAddLocation from './WatchListAddLocation.jsx'
import WatchList from './WatchList.jsx'
import WatchListNoUser from './WatchListNoUser.jsx'
import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

const paperStyle = {
  position: 'absolute',
  width: '50%',
  backgroundColor: 'white',
  border: '3px solid',
  padding: 10
}

const modalStyle = { top: '20%', left: '25%' }

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mapLocation: {
        latitude: 37.785164,
        longitude: -100
      },
      addLocationForm: false
    }
    this.handleLocationForm = this.handleLocationForm.bind(this)
  }

  componentDidUpdate () {
    const { mapLocation } = this.props
    if (
      mapLocation.latitude !== this.state.mapLocation.latitude ||
      mapLocation.longitude !== this.state.mapLocation.longitude
    ) {
      this.setState({ mapLocation: mapLocation })
    }
  }

  handleLocationForm () {
    this.setState({ addLocationForm: false })
  }

  render () {
    return (
      <div>
        <Grid container alignItems="stretch" spacing={0}>
          <Grid item xs={3}>
            {/* this.props.userLoggedIn ? <Locations clickHandler={this.handleLocationClick}/> : <WatchListNoUser /> */}
            <WatchList
              userInfo={this.props.userInfo}
              handleLocationClick={this.props.handleLocationClick}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ addLocationForm: true })}
            >
              Add Location
            </Button>
            <Modal style={modalStyle} open={this.state.addLocationForm}>
              <Paper style={paperStyle}>
                <WatchListAddLocation
                  handleLocationForm={this.handleLocationForm}
                  userInfo={this.props.userInfo}
                  addLocation={this.props.addLocation}
                />
              </Paper>
            </Modal>
          </Grid>
          <Grid item xs={9}>
            <Map mapLocation={this.state.mapLocation} />
          </Grid>
        </Grid>
      </div>
    )
  }
}
