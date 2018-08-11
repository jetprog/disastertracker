import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Search from './components/addressSearch.jsx'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
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
              <Search />
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </AppBar>

      </React.Fragment>
    )
  }
}
