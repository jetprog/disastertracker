import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Search from './components/Search.jsx'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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
            <Grid item xs={2}>
              {/* <Button color="inherit" href="#/login">Login</Button> */}
              <Link to="/login">Login</Link>
            </Grid>
          </Grid>
        </AppBar>
      </React.Fragment>
    )
  }
}
