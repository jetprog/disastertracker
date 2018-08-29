import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
      <section id="hero">
      <img id="hero-image" src="./assets/storm.jpg" />
      <div id="hero-content">
       <h1>Disaster Tracker</h1>
       <p>Know when danger is coming right from your phone</p>
       </div>
      </section>
      <div id="about">
        <h4>About</h4>
        <img id="example" src='./assets/example.png' />
        <p>There are applications out there that will allow you to look up weather but none that will notify you for the many different locations this world has to offer. With Disaster tracker, add locations for friends and family members when there is any major inclement weather happening anywhere near them, even when the user is not logged in. Rest easier with Disaster tracker, it has your back! </p>
      </div>
      <div id="feature-list">
      <h4>Feature List</h4>
      <ul>
        <li>Geolocation</li>
        <li>Location based alerts</li>
        <li>Alerts for friends and family</li>
      </ul>
      </div>
      <div id="footer">
      <div class="sticky-footer">
        Powered by @team-disaster
      </div>
      </div>
      </div>
    )
  }
}

export default Landing;