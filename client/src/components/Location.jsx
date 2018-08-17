import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
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
            <Typography>
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