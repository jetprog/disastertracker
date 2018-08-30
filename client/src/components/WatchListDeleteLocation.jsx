import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

export default class WatchListDeleteLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeLocation = this.removeLocation.bind(this);
  }

  removeLocation() {
    const locationID = this.props.location.location_id;

    this.props.deleteLocation(locationID);
    this.props.handleLocationForm();
  }

  render() {
    return (
      <div>
        <Grid container spacing={8} justify="center">
          <Grid item xs={10}>
            <Typography variant="title">
              Would you like to remove this Location?
            </Typography>
          </Grid>
          <br />
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.removeLocation}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.handleLocationForm()}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
