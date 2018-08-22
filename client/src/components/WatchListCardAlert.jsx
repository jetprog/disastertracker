import React, { Component } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import WatchListCardAlertInfo from './WatchListCardAlertInfo.jsx'

const parseAlerts = function (alerts) {
  if (!alerts.features || !alerts.features.length === 0) { return [] }
  var alertArray = alerts.features.map(alert => alert)
  alertArray = alertArray.filter(alert => {
    if (alert.properties.status === 'Test' || alert.properties.status === 'Cancel') { return false }
    let expires = new Date(alert.properties.expires)
    let TIME_NOW = Date.now()
    if (expires < TIME_NOW) { return false }
    return true
  })
  return alertArray
}

export default class WatchListCardAlert extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alerts: []
    }
    this.handleAlertResponse = this.handleAlertResponse.bind(this)
    this.getLocationAlerts = this.getLocationAlerts.bind(this)
  }

  componentDidMount () {
    this.getLocationAlerts(this.handleAlertResponse)
    this.locationAlertInterval = setInterval(() =>
      this.getLocationAlerts(this.handleAlertResponse), 10 * 60 * 1000)
  }
  componentWillUnmount () {
    clearInterval(this.locationAlertInterval)
  }
  getLocationAlerts (callback) {
    let params = {
      active: 1,
      severity: 'severe',
      point: `${this.props.location.latitude},${this.props.location.longitude}`
    }
    axios
      .get('https://api.weather.gov/alerts', { params })
      .then(results => callback(null, parseAlerts(results.data)))
      .catch(err => callback(err, null))
  }

  handleAlertResponse (err, alertResponse) {
    if (alertResponse.length === 0) {
      return this.state.alerts.length !== 0 && this.setState({ alerts: [] })
    }
    let alerts = alertResponse.map(alert => alert.properties)
    this.setState(alerts)
  }

  render () {
    let { alerts } = this.state
    console.log(alerts)
    if (alerts.length === 0) {
      return <Typography>No active alerts at this time</Typography>
    }
    return alerts.map(alert => (
      <WatchListCardAlertInfo alert={alert} key={alert.id} />
    ))
  }
}
