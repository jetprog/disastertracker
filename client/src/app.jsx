import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './nav.jsx'
import Body from './body.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Body />
        </React.Fragment>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
