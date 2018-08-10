import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './components/landing.jsx';
import Profile from './components/profile.jsx';
import Main from './components/main.jsx';
import Community from './components/community.jsx';
import Login from './components/login.jsx';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
     <Switch>
      <Route path="/landing" exact render={landing} />
      <Route exact path="/main" exact component={main} />
      <Route path="/login" exact component={login} />
      <Route path="/profile" exact component={profile} />
      <Route path="/community" exact component={community} />
    </Switch>
    )
  }
}