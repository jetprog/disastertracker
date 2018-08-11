import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
      <Grid container alignItems="stretch" spacing={0}>
        <Grid item xs={3}>
          <div>Locations</div>
        </Grid>
        <Grid item xs={9}>
          <div>Map</div>
        </Grid>
      </Grid>
      </div>
      )
  }
}
