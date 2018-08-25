import React, { Component } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import WatchListCardAlertInfo from './WatchListCardAlertInfo.jsx'
import WatchListCardAlert from './WatchListCardAlert.jsx'
import WatchListDeleteLocation from './WatchListDeleteLocation.jsx'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

const paperStyle = {
  position: 'absolute',
  width: '50%',
  backgroundColor: 'white',
  border: '1px solid',
  padding: 10
}

const modalStyle = { top: '20%', left: '25%' }

export default class WatchListCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deleteLocationForm: false
    }
    this.handleLocationForm = this.handleLocationForm.bind(this)
  }

  handleLocationForm () {
    this.setState({ deleteLocationForm: false })
  }

  render () {
    return (
      <div>
        <Card onClick={() =>
          this.props.handleLocationClick({
            latitude: this.props.location.lat,
            longitude: this.props.location.long
          })}>


          <CardContent>
          <Grid item container xs={12} alignItems="flex-end" direction="column" >
            <Grid item>
              <Button size="small" onClick={() => this.setState({ deleteLocationForm: true })}>Remove</Button>
            </Grid>
          </Grid>
          <Modal style={modalStyle} open={this.state.deleteLocationForm}>
            <Paper style={paperStyle}>
              <WatchListDeleteLocation handleLocationForm={this.handleLocationForm} deleteLocation={this.props.deleteLocation} location={this.props.location}/>
            </Paper>
          </Modal>
            <Typography component="h2">{this.props.location.loc_name}</Typography>
            <WatchListCardAlert
              location={{ latitude: this.props.location.lat, longitude: this.props.location.long }}
              listenForAlerts={this.props.listenForAlerts}
            />
          </CardContent>
        </Card>
        <br />
      </div>
    )
  }
}
