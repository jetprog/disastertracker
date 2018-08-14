import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Search from './components/Search.jsx'
import Login from './components/Login.jsx'

const paperStyle = {
  position: 'absolute',
  width: '50%',
  height: '50%',
  backgroundColor: 'white',
  boxShadow: 'black',
  padding: 4
}

const modalStyle = { top: '25%', left: '25%' }

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginFormOpen: false,
      mapCenter: {
        latitude: null,
        longitude: null
      }
    }
    this.handleAppBarSearchClick = this.handleAppBarSearchClick.bind(this)
  }
  handleAppBarSearchClick (location) {
    const {latitude, longitude} = location.displayPosition
    this.setState({mapCenter: {latitude, longitude}})
  }

  render () {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="title" color="primary">
                <Link to="/main">Home</Link>
              </Typography>
            </Grid>
            <Grid item xs={4} color="primary">
              <Search handleSearchClick={this.handleAppBarSearchClick}/>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit" onClick={() => this.setState({loginFormOpen: true})}>Login</Button>
              <Modal style={modalStyle} open={this.state.loginFormOpen} onClose={() => this.setState({loginFormOpen: false})}>
                <Paper style={paperStyle}>
                  <Login />
                </Paper>
              </Modal>
              {/* <Link to="/login">Login</Link> */}
            </Grid>
            <Grid item xs={1}>
              {/* need to change colors */}
              <Link to="/signup">Sign up</Link>
            </Grid>
          </Grid>
        </AppBar>
      </React.Fragment>
    )
  }
}
