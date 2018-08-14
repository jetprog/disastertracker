import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
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
        <h2>Please log in</h2>
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
          name="password"
          margin="none"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <Grid container spacing={8} alignment="center" >
          <Grid item xs={3}>
            <Button onClick={() => console.log('clicked login')} color="primary">Login</Button>
          </Grid>
          <Grid item xs={4}>
            <Google />
          </Grid>
          <Grid item xs={4}>
            <Facebook />
          </Grid>
        </Grid>

      </div>
    )
  }
}
