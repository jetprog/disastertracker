import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav.jsx'
import Body from './Body.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userIsLoggedIn: false,
      userInfo: null,
      mapLocation: {
        latitude: 37.785164,
        longitude: -100
      }
    }
    this.handleAppBarSearchClick = this.handleAppBarSearchClick.bind(this)
    this.handleLocationClick = this.handleLocationClick.bind(this)
    this.handleUserStatusChange = this.handleUserStatusChange.bind(this)
  }

  componentDidMount () {
    axios.get('/api/user')
      .then(res => {
        console.log('App received Logged in user is ', res.data.user)
        this.setState({userIsLoggedIn: true, userInfo: res.data.user})
      })
      .catch(() => {
        console.log('App verified that there is no user logged in')
        this.setState({isLoggedIn: false})
      })
  }

  handleAppBarSearchClick (location) {
    const {latitude, longitude} = location.displayPosition
    this.setState({mapLocation: {latitude, longitude}})
  }

  handleLocationClick (location) {
    const {latitude, longitude} = location
    this.setState({mapLocation: {latitude, longitude}})
  }

  handleUserStatusChange (change, data) {
    console.log('App user status change', change)
  }
  // setTimeout(() => {
  //   console.log(this.state.mapLocation);
  // }, 1000);

  render () {
    return (
      <React.Fragment>
        <Nav
          handleSearchClick={this.handleAppBarSearchClick}
          userIsLoggedIn={this.state.userIsLoggedIn}
          userInfo={this.state.userInfo}
          handleUserStatusChange={this.handleUserStatusChange}
        />
        <Body
          mapLocation={this.state.mapLocation}
          handleLocationClick={this.handleLocationClick}
          userIsLoggedIn={this.state.userIsLoggedIn}
          userInfo={this.state.userInfo}
        />
      </React.Fragment>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
