import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav.jsx'
import Body from './Body.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mapCenter: {
        latitude: 37.785164,
        longitude: -100
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
        <Nav handleSearchClick={this.handleAppBarSearchClick}/>
        <Body mapCenter={this.state.mapCenter}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
