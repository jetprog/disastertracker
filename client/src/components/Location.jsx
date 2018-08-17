import React, { Component } from 'react'
import AsyncSelect from 'react-select/lib/Async'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Location extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Card>
          <CardContent>
            <Typography>
              Sample Data
            </Typography>
            <Typography onClick={() => this.props.handleLocationClick({latitude:35.3672579, longitude:-120.8463576})}>
            944 Market Street, San Francisco, CA 94102
            </Typography>
            <Typography>
              No alerts at this time
            </Typography>
          </CardContent>
        </Card>
      </div>
      )
  }
}
