import React from 'react';
import Button from '@material-ui/core/Button'

export default class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
      <br></br>
      <Button variant="contained" color="primary">Add Location</Button>
      </div>
    )
  }
}