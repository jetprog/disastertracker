import React, { Component } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import WatchListCardAlertInfo from './WatchListCardAlertInfo.jsx'

const parseAlerts = function (alerts) {
  if (!alerts.features || alerts.features.length === 0) { return [] }
  var alertArray = alerts.features.map(alert => alert)
  alertArray = alertArray.filter(alert => alert.properties.status !== 'Test')
  return alertArray
}

/**
 * Desription: Maintains a list of alerts for each loaction that is the currently logged
 * in user has on their watchlist.  Each card has a lat and lon and does it's own API
 * calls when the card is initially mounted and every 10 miinuted. Alerts are maintained
 * in state for the card so that the async updated to the card alerts are handled by react
 */
export default class WatchListCardAlert extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alerts: []
    }
    this.handleAlertResponse = this.handleAlertResponse.bind(this)
    this.getLocationAlerts = this.getLocationAlerts.bind(this)
    this.collectUCGdescriptions = this.collectUCGdescriptions.bind(this)
  }

  componentDidMount () {
    this.getLocationAlerts(this.handleAlertResponse)
    this.locationAlertInterval = setInterval(
      () => this.getLocationAlerts(this.handleAlertResponse),
      10 * 60 * 1000
    )
  }
  componentWillUnmount () {
    clearInterval(this.locationAlertInterval)
  }

  /**
   * @Description Handles API Call to weather.gov specifically for the events that
   * impact the location that this card refers to.  Results are returned through
   * the callback function after being parsed to remove any Test alerts. this is needed
   * because the weather service has very frequent test messages that come through.
   * @param {*} callback
   */
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
  /**
   * Description: Used as the callback function to the getLocationAlerts function.
   * If no alerts were returned, the setState is called to clear prior alerts.
   * Responses are filtered to remove expired and Cancelled alerts before they
   * are stored in state. The unfiltered alerts are also returned to Main through
   * the listenForAlerts function.
   *
   * @param {*} err
   * @param {array} alertResponse
   */
  handleAlertResponse (err, alertResponse) {
    if (err) {
      // ignoring errors - will not update card until next interval
    } else if (alertResponse.length === 0) {
      return this.setState({ 'alerts': [] })
    } else {
      let alerts = alertResponse.map(alert => alert.properties)
      alerts = alerts.filter(alert => {
        return Date.parse(alert.ends || alert.expires) > Date.now() && alert.status !== 'Cancel'
      })
      this.setState({ alerts })
      this.props.listenForAlerts(alertResponse.filter(alert => alert.geometry !== null))
      this.collectUCGdescriptions(alertResponse.filter(alert => alert.geometry === null), this.props.listenForAlerts)
    }
  }

  collectUCGdescriptions (alertResponse, callback) {
    alertResponse.forEach((alrt, ind, arr) => {
      Promise.all(
        alrt.properties.affectedZones.map(ugc =>
          axios
            .get(ugc)
            .then(results => results.data.geometry)
        ))
        .then(result => {
          arr[ind].geometry = result
          return callback(arr[ind])
        })
    })
  }

  render () {
    let { alerts } = this.state
    if (alerts.length === 0) {
      return <Typography color="textSecondary">No active alerts at this time</Typography>
    } else {
      return alerts.map(alert => (
        <WatchListCardAlertInfo alert={alert} key={alert.id} />
      ))
    }
  }
}
