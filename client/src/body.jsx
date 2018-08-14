import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Profile from './components/Profile.jsx'
import Main from './components/Main.jsx'
import Community from './components/Community.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'


export default class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/main" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/community" exact component={Community} />
      </Switch>
    )
  }
}
