import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Google from './Google.jsx'
import Facebook from './Facebook.jsx'
import axios from 'axios'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ' '
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }
  handleChange (e) {
    this.setState({[e.target.name]: e.target.value, error: ' '})
  }

  handleLoginClick (source, data, err) {
    var {firstname, lastname, email, password} = this.state
    if (source === 'local') {
      var combinedUserData = {
        first_name: firstname,
        last_name: lastname,
        email,
        password}
    } if (source === 'google') {
      var combinedUserData = {
        first_name: data.profileObj.givenName,
        last_name: data.profileObj.familyName,
        email: data.profileObj.email,
        type: 'social'
      }
    }
    this.postToServer(combinedUserData, (err, resp) => {
      if (err) {
        this.setState({error: 'Incorrect username or password!'})
      } else {
        this.props.handleFormCompletion(resp)
      }
    })
  }

  postToServer (data, callback) {
    console.log('login PostToServer data ->', data)
    axios.post('/api/login', data)
      .then(response => callback(null, response))
      .catch(err => callback(err, null))
  }
  render () {
    return (
      <div>
        <h2>Please log in</h2>
        <Typography color='error' gutterBottom>
          {this.state.error}
        </Typography>
        <Grid container spacing={8} padding={5} justify="center" >
          <Grid item xs={10} >
            <TextField
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              margin="none"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={10} >
            <TextField
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              margin="none"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained" onClick={() => this.handleLoginClick('local')} color="primary">
              Login
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Google clickHandler={this.handleLoginClick} />
          </Grid>
          <Grid item xs={3}>
            <Facebook clickHandler={this.handleLoginClick} />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => this.props.handleFormCompletion()} color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>

      </div>
    )
  }
}
