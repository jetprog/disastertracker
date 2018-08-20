import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

export default class WatchListCardAlertInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="baseline">
        <Grid item></Grid>
        <Typography>{this.props.alert.event}
          <IconButton action={() => ''} ><InfoIcon /> </IconButton>
        </Typography>
      </Grid>
    )
  }
}
