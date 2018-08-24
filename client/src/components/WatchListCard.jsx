import React, { Component } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import WatchListCardAlert from './WatchListCardAlert.jsx'

export default class WatchListCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
            <Typography variant="headline" component="h2">{this.props.location.loc_name}
            </Typography>
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
