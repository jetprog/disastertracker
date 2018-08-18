importReact, {Component} from 'react'
import axios from 'axios'


export default class LocationAlerts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alerts: []
    }
    this.parseAlerts = this.parseAlerts.bind(this);
    this.getLocationAlerts = this.getLocationAlerts.bind(this);
  }

  componentDidMount(){
    this.getLocationAlerts()
    // const locationAlertInterval = setInterval(this.getLocationAlerts,  10 * 60 * 1000)
  }
  componentWillUnmount(){
    //clearInterval(locationAlertInterval)

  }
  getLocationAlerts () {
    params = {
      active: 1,
      point = `${this.props.latitude},${this.props.longitude}`
     }
    axios.get('https://api.weather.gov/alerts', params)
    .then(result => this.parseAlerts(null, result))
    .catch(err => this.parseAlerts(null, result))
  }

  parseAlerts(err, results){
    //do something with the results to build an array then setstate with array
  }

  render () {
    return this.state.alerts.length === 0 ? (<span>No active alerts at this time</span>) :
    ( {alerts.map(alert => alert)})
  }
}
