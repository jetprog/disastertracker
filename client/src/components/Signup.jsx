import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

export default class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }
  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLoginClick (source, data) {
    var {firstname, lastname, email, password} = this.state
    if (source === 'local') {
      var combinedUserData = {
        first_name: firstname,
        last_name: lastname,
        email,
        password}
    } if (source === 'google') {
      var combinedUserData = {
        first_name: data.profileobj.givenName,
        last_name: data.profileobj.familyName,
        email: data.profileobj.email,
        type: 'social'
      }
    }

    this.postToServer(combinedUserData, (err, resp) => {
      if (err) {
        console.log('post to server from login gave error ->', err)
        // handle failure with message to user
        // if cancel was pressed this.props.handleFormCompletion(null)
        // add listener for click outsidde of form and treat as cancel
      } else {
        this.props.handleFormCompletion(resp)
      }
    })
  }

  postToServer (data, callback) {
    axios.post('/api/signup', data)
      .then(response => callback(null, response))
      .catch(err => callback(err, null))
  }

  render () {
    return (
      <div>
        <h2>Sign up</h2>
        <TextField
          autoFocus
          value={this.state.firstname}
          name="firstname"
          margin="none"
          id="firstname"
          label="First Name"
          type="text"
          fullWidth
          onChange={this.handleChange}
        />
        <TextField
          value={this.state.lastname}
          onChange={this.handleChange}
          name="lastname"
          margin="none"
          id="lastname"
          label="Last Name"
          type="text"
          fullWidth
        />
        <TextField
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
          margin="none"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
          margin="none"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <Button variant="contained" onClick={() => this.handleLoginClick('local')} color="primary">
        Sign up
        </Button>
        <Button variant="contained" onClick={() => this.props.handleFormCompletion()} color="primary">
        Cancel
        </Button>
      </div>
    )
  }
}
