import React, { Component } from 'react';
import { Button, Modal, Paper, Grid } from '@material-ui/core';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const paperStyle = {
  position: 'absolute',
  width: '50%',
  backgroundColor: 'white',
  border: '3px solid',
  padding: 10
};

const modalStyle = { top: '15%', left: '25%' };

export default class LoginLogoutWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormOpen: false,
      signUpFormOpen: false
    };
    this.handleFormCompletion = this.handleFormCompletion.bind(this);
    //
  }
  handleFormCompletion(result) {
    this.setState({ loginFormOpen: false, signUpFormOpen: false });
    this.props.handleUserStatusChange(result);
  }

  render() {
    return this.props.userIsLoggedIn ? (
      <Button
        className="logoutButton"
        color="inherit"
        onClick={() => this.handleFormCompletion('logout')}
      >
        Logout
      </Button>
    ) : (
      <Grid container>
        <Grid item>
          <Button
            className="loginButton"
            color="inherit"
            onClick={() => this.setState({ loginFormOpen: true })}
          >
            Login
          </Button>
          <Modal style={modalStyle} open={this.state.loginFormOpen}>
            <Paper style={paperStyle}>
              <Login handleFormCompletion={this.handleFormCompletion} />
            </Paper>
          </Modal>
        </Grid>
        <Grid item>
          <Button
            className="signupButton"
            color="inherit"
            onClick={() => this.setState({ signUpFormOpen: true })}
          >
            SignUp
          </Button>
          <Modal style={modalStyle} open={this.state.signUpFormOpen}>
            <Paper style={paperStyle}>
              <Signup handleFormCompletion={this.handleFormCompletion} />
            </Paper>
          </Modal>
        </Grid>
      </Grid>
    );
  }
}
