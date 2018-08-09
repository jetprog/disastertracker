import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <React.Fragment>
      <Link to="/landing">Landing</Link>
      <Link to="/main">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/community">Community</Link>
      </React.Fragment>
      )
  }
}

