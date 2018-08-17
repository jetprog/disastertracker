import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav.jsx'
import Body from './Body.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mapLocation: {
        latitude: 37.785164,
        longitude: -100
      }
    }
    this.handleAppBarSearchClick = this.handleAppBarSearchClick.bind(this)
    this.handleLocationClick = this.handleLocationClick.bind(this)
  }

  handleAppBarSearchClick (location) {
    const {latitude, longitude} = location.displayPosition
    this.setState({mapLocation: {latitude, longitude}})
  }

  handleLocationClick (location) {
    const {latitude, longitude} = location
    this.setState({mapLocation: {latitude, longitude}})
  }
    // setTimeout(() => {
    //   console.log(this.state.mapLocation);
    // }, 1000);

  render () {
    return (
      <React.Fragment>
        <Nav handleSearchClick={this.handleAppBarSearchClick}/>
        <Body mapLocation={this.state.mapLocation} handleLocationClick={this.handleLocationClick}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
