import React from 'react';
import { Button, Typography, TextField, Grid } from '@material-ui/core';
import LoginGoogle from './LoginGoogle.jsx';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ' '
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, error: ' ' });
  }

  handleLoginClick(source, data) {
    var combinedUserData;
    var { firstname, lastname, email, password } = this.state;
    if (source === 'local') {
      combinedUserData = {
        first_name: firstname,
        last_name: lastname,
        email,
        password
      };
    }
    if (source === 'google') {
      combinedUserData = {
        first_name: data.profileObj.givenName,
        last_name: data.profileObj.familyName,
        email: data.profileObj.email,
        type: 'social'
      };
    }
    this.postToServer(combinedUserData, (err, resp) => {
      // console.log(combinedUserData);
      if (err) {
        this.setState({ error: 'Incorrect username or password!' });
      } else {
        this.props.handleFormCompletion(resp);
      }
    });
  }

  postToServer(data, callback) {
    axios
      .post('/api/login', data)
      .then(response => callback(null, response))
      .catch(err => callback(err, null));
  }
  render() {
    return (
      <Grid container spacing={8} justify="center" className="loginForm">
        <Grid item xs={10}>
          <Typography variant="title">Please Log In</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography color="error" align="center" paragraph>
            <span className="loginErrorMessage">{this.state.error}</span>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            className="loginEmailField"
            autoFocus
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
            className="loginPasswordField"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            label="Password"
            type="password"
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <Button
            className="loginLoginButton"
            variant="contained"
            onClick={() => this.handleLoginClick('local')}
            color="primary"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={5}>
          <LoginGoogle
            clickHandler={this.handleLoginClick}
            className="loginGoogleButton"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            className="loginCancelButton"
            variant="contained"
            onClick={() => this.props.handleFormCompletion()}
            color="primary"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    );
  }
}
