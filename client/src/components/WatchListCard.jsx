import React, { Component } from 'react'
import AsyncSelect from 'react-select/lib/Async'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
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
            />
          </CardContent>
        </Card>
        <br />
      </div>
    )
  }
}
