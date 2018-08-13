import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Google from './Google.jsx'
import Facebook from './Facebook.jsx'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
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
          Login
        </Button>
        <Google />
        <Facebook />
      </div>
    )
  }
}
