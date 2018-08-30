import React from 'react'
import axios from 'axios'
import { Typography, Grid, Button, TextField } from '@material-ui/core'

export default class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConf: '',
      error: ' '
    }
    this.handleChange = this.handleChange.bind(this)
    this.signupClick = this.signupClick.bind(this)
  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value, error: ' ' })
  }

  signupClick (source, data) {
    if (this.state.password !== this.state.passwordConf) {
      return this.setState({
        error: 'Confirmation password did not match password'
      })
    }
    if (this.state.firstname === '') {
      return this.setState({
        error: 'First Name field is required'
      })
    }
    if (this.state.lasttname === '') {
      return this.setState({
        error: 'Last Name field is required'
      })
    }
    if (this.state.email === '') {
      return this.setState({
        error: 'Email field is required'
      })
    }
    if (this.state.password === '') {
      return this.setState({
        error: 'Password field is required'
      })
    }

    var { firstname, lastname, email, password } = this.state
    var combinedUserData;
    if (source === 'local') {
      combinedUserData = {
        first_name: firstname,
        last_name: lastname,
        email,
        password
      }
    }
    if (source === 'google') {
      combinedUserData = {
        first_name: data.profileobj.givenName,
        last_name: data.profileobj.familyName,
        email: data.profileobj.email,
        type: 'social'
      }
    }

    this.postToServer(combinedUserData, (err, resp) => {
      if (err) {
        return this.setState({
          error: 'That email is already in use'
        })
      } else {
        this.props.handleFormCompletion(resp)
      }
    })
  }

  postToServer (data, callback) {
    axios
      .post('/api/signup', data)
      .then(response => callback(null, response))
      .catch(err => callback(err, null))
  }

  render () {
    return (
      <Grid container spacing={8} justify="center" className="signupForm">
        <Grid item xs={10}>
          <Typography variant="title">New User Sign Up</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography color="error" align="center" paragraph>
            {this.state.error}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            autoFocus
            value={this.state.firstname}
            name="firstname"
            label="First Name"
            type="text"
            fullWidth
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            value={this.state.lastname}
            onChange={this.handleChange}
            name="lastname"
            label="Last Name"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            label="Email Address"
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            label="Password"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            value={this.state.passwordConf}
            onChange={this.handleChange}
            name="passwordConf"
            label="Confirm Password"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => this.signupClick('local')}
            color="primary"
          >
          Sign up
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => this.props.handleFormCompletion()}
            color="primary"
          >
          Cancel
          </Button>
        </Grid>
      </Grid>
    )
  }
}
