import React from 'react';
import Grid from '@material-ui/core/Grid';
import WatchListAddLocation from './WatchListAddLocation.jsx';
import WatchList from './WatchList.jsx';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Map from './Map.jsx';

const paperStyle = {
  position: 'absolute',
  width: '50%',
  backgroundColor: 'white',
  border: '1px solid',
  padding: 10
};

const modalStyle = { top: '20%', left: '25%' };

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLocation: {
        latitude: props.mapLocation.latitude,
        longitude: props.mapLocation.longitude
      },
      addLocationForm: false,
      alerts: {}
    };
    this.handleLocationForm = this.handleLocationForm.bind(this);
    this.listenForAlerts = this.listenForAlerts.bind(this);
  }
  /** 5 min Interval for removing epired alerts
   *    NOT tested yet.  Once we know alers are working this should be tested and implemented
   *
   * componentDidMount() {
   *   this.checkExpiredAlerts = setInterval(()=>this.listenForAlerts([]), 1000 * 60 * 5)
   * }
   * componentWillUnmount () {
   *   clearInterval(this.checkExpiredAlerts)
   * }
   *
   */
  componentDidUpdate() {
    const { mapLocation } = this.props;
    if (
      mapLocation.latitude !== this.state.mapLocation.latitude ||
      mapLocation.longitude !== this.state.mapLocation.longitude
    ) {
      this.setState({ mapLocation: mapLocation });
    }
  }

  handleLocationForm() {
    this.setState({ addLocationForm: false });
  }

  listenForAlerts(alertData) {
    //console.log('Listen for alerts received ', alertData)
    this.setState(prevState => {
      let { alerts } = prevState;
      // console.log('prevstate ', alerts)
      for (var i = 0; i < alertData.length; i++) {
        let alert = alertData[i];
        if (alert.geometry) {
          if (!Array.isArray(alert.geometry)) {
            alert.geometry = [alert.geometry];
          }
          alerts[alert.properties.id] = {
            event: alert.properties.event,
            status: alert.properties.status,
            effective: alert.properties.effective,
            ends: alert.properties.ends || alert.properties.expires,
            geometry: alert.geometry,
            headline: alert.properties.headline
          };
        }
      }
      // remove expired or cancelled alerts
      for (let alert in alerts) {
        if (Date.parse(alert.ends) < Date.now() || alert.status === 'Cancel') {
          delete alerts[alert];
        }
      }
      return { alerts: alerts };
    });
  }

  render() {
    return (
      <div>
        <Grid container alignItems="stretch" spacing={0} color="black">
          <Grid item xs={3}>
            {/* this.props.userLoggedIn ? <Locations clickHandler={this.handleLocationClick}/> : <WatchListNoUser /> */}
            <WatchList
              userInfo={this.props.userInfo}
              handleLocationClick={this.props.handleLocationClick}
              listenForAlerts={this.listenForAlerts}
              deleteLocation={this.props.deleteLocation}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ addLocationForm: true })}
            >
              Add Location
            </Button>
            <Modal style={modalStyle} open={this.state.addLocationForm}>
              <Paper style={paperStyle}>
                <WatchListAddLocation
                  handleLocationForm={this.handleLocationForm}
                  userInfo={this.props.userInfo}
                  addLocation={this.props.addLocation}
                />
              </Paper>
            </Modal>
          </Grid>
          <Grid item xs={9}>
            <Map
              mapLocation={this.state.mapLocation}
              alerts={this.state.alerts}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
