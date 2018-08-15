import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


export default class Locations extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h2>Location</h2>
        <TextField
          autoFocus
          name="name"
          margin="none"
          id="name"
          label="Name"
          type="name"
          fullWidth
        />
        <TextField
          name="address"
          margin="none"
          id="address"
          label="Address"
          type="address"
          fullWidth
        />
        <Button onClick={() => console.log('clicked login')} color="primary">
        Add Location
        </Button>
      </div>
    )
  }
}






