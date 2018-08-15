import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h2>Sign up</h2>
        <TextField
          autoFocus
          name="firstname"
          margin="none"
          id="firstname"
          label="First Name"
          type="firstname"
          fullWidth
        />
        <TextField
          autoFocus
          name="lastname"
          margin="none"
          id="lastname"
          label="Last Name"
          type="lastname"
          fullWidth
        />
        <TextField
          autoFocus
          name="email"
          margin="none"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          name="password"
          margin="none"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <Button onClick={() => console.log('clicked login')} color="primary">
        Sign up
        </Button>
      </div>
    )
  }
}
