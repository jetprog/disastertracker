import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const paperStyle = {
  position: 'absolute',
  width: '50%',
  height: '50%',
  backgroundColor: 'white',
  border: '3px solid',
  padding: 10
}

const modalStyle = { top: '25%', left: '25%' }

export default class LoginLogoutWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginFormOpen: false,
      signUpFormOpen: false
    }
    this.handleFormCompletion = this.handleFormCompletion.bind(this)
    //
  }
  handleFormCompletion (result) {
    this.setState({loginFormOpen: false, signUpFormOpen: false})
    this.props.handleUserStatusChange(result)
  }

  render () {
    return this.props.userIsLoggedIn
      ? (<Button color="inherit" onClick={() => this.handleFormCompletion('logout')}>Logout</Button>)
      : (
        <Grid container>
          <Grid item >
            <Button color="inherit" onClick={() => this.setState({loginFormOpen: true})}>Login</Button>
            <Modal style={modalStyle} open={this.state.loginFormOpen}>
              <Paper style={paperStyle}>
                <Login handleFormCompletion={this.handleFormCompletion} />
              </Paper>
            </Modal>
          </Grid>
          <Grid item >
            <Button color="inherit" onClick={() => this.setState({signUpFormOpen: true})}>SignUp</Button>
            <Modal style={modalStyle} open={this.state.signUpFormOpen} >
              <Paper style={paperStyle}>
                <Signup handleFormCompletion={this.handleFormCompletion}/>
              </Paper>
            </Modal>
          </Grid>
        </Grid>
      )
  }
}
