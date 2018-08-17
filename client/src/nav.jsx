import React from 'react'
import { Link } from 'react-router-dom'
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
import Signup from './components/Signup.jsx'

const paperStyle = {
  position: 'absolute',
  width: '50%',
  height: '50%',
  backgroundColor: 'white',
  border: '3px solid',
  padding: 10
}

const modalStyle = { top: '25%', left: '25%' }

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginFormOpen: false,
      signUpFormOpen: false
    }
    //
  }

  render () {
    return (
      <React.Fragment>
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
              <Button color="inherit" onClick={() => this.setState({signUpFormOpen: true})}>SignUp</Button>
              <Modal style={modalStyle} open={this.state.signUpFormOpen} onClose={() => this.setState({signUpFormOpen: false})}>
                <Paper style={paperStyle}>
                  <Signup />
                </Paper>
              </Modal>
            </Grid>
          </Grid>
        </AppBar>
      </React.Fragment>
    )
  }
}
