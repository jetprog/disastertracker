import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
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
        latitude: null,
        longitude: null
        // latitude: 37.785164,
        // longitude: -100
      }
    }
    this.handleAppBarSearchClick = this.handleAppBarSearchClick.bind(this)
    this.handleLocationClick = this.handleLocationClick.bind(this)
    this.handleUserStatusChange = this.handleUserStatusChange.bind(this)
    this.getUserFromSession = this.getUserFromSession.bind(this)
    this.addLocationClick = this.addLocationClick.bind(this)
  }

  componentDidMount () {
    this.getUserFromSession()
  }

  getUserFromSession () {
    axios.get('/api/user')
      .then(res => {
        this.setState({userIsLoggedIn: true, userInfo: res.data})
        if (res.data.locations.length > 0) {
          this.handleLocationClick(res.data.locations[0])
        } else {
          navigator.geolocation.getCurrentPosition(position => this.handleLocationClick(position.coords))
        }
      })
      .catch(() => {
        this.setState({isLoggedIn: false})
      })
  }

  handleAppBarSearchClick (location) {
    const {latitude, longitude} = location.displayPosition
    this.setState({mapLocation: {latitude, longitude}})
  }

  handleLocationClick (location) {
    const {latitude, longitude} = location
    console.log('locationClick has ', latitude)
    this.setState({mapLocation: {latitude, longitude}})
  }

  handleUserStatusChange (result) {
    if (result) {
      if (result !== 'logout') {
        this.setState({userIsLoggedIn: true, userInfo: result.data})
        if (result.data.locations.length > 0) {
          this.handleLocationClick(result.data.locations[0])
        } else {
          navigator.geolocation.getCurrentPosition(position => this.handleLocationClick(position.coords))
        }
      } else {
        this.setState({userIsLoggedIn: false, userInfo: null})
        axios.post('/api/logout')
      }
    }
  }
  addLocationClick (location) {
    axios
      .post('/api/location', location)
      .then(response => this.setState({userInfo: response.data}))
      .catch(error => console.log(error))
  }

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
          addLocation={this.addLocationClick}
        />
      </React.Fragment>
    )
  }
}

ReactDOM.render((
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
), document.getElementById('app'))
