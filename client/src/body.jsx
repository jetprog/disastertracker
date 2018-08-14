import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Main from './components/Main.jsx'
import Community from './components/Community.jsx'

export default class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    //
  }

  render () {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/main" exact component={Main} />
        <Route path="/community" exact component={Community} />
      </Switch>
    )
  }
}
