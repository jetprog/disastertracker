import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import Search from './components/Search.jsx';
import LoginLogoutWrapper from './components/LoginLogoutWrapper.jsx';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormOpen: false,
      signUpFormOpen: false
    };
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography variant="title" color="inherit">
                <span className="appBarTitle">Disaster Tracker</span>
              </Typography>
            </Grid>
            <Grid item xs={4} >
              <Search handleSearchClick={this.props.handleSearchClick} />
            </Grid>
            <Grid item xs={2}>
              <LoginLogoutWrapper
                userIsLoggedIn={this.props.userIsLoggedIn}
                userInfo={this.props.userInfo}
                handleUserStatusChange={this.props.handleUserStatusChange}
                getUserFromSession={this.props.getUserFromSession}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
