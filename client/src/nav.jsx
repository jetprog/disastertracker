import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Search from './components/Search.jsx'
import LoginLogoutWrapper from './components/LoginLogoutWrapper.jsx'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginFormOpen: false,
      signUpFormOpen: false
    }
  }

  render () {
    return (
      <AppBar position="static">
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Typography variant="title" color="inherit">
              <Link to="/main">DisasterTracker</Link>
            </Typography>
          </Grid>
          <Grid item xs={4} color="primary">
            <Search handleSearchClick={this.props.handleSearchClick}/>
          </Grid>
          <Grid item xs={2}>
            <LoginLogoutWrapper
              userIsLoggedIn={this.props.userIsLoggedIn}
              userInfo={this.props.userInfo}
              handleUserStatusChange={this.props.handleUserStatusChange}
            />
          </Grid>
        </Grid>
      </AppBar>
    )
  }
}
