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
          <Grid container direction="row" justify="space-between"alignItems="center">
            <Typography variant="title" color="inherit">
              <Link to="/main">Home</Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Grid>
        </AppBar>
        <Search />
      </React.Fragment>
    )
  }
}
