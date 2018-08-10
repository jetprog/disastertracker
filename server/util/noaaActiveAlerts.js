const axios = require('axios')

const noaaAPI = 'https://api.weather.gov'
const activeAlertsEndPoint = '/alerts/active' // JSON-LD response in CAP-ATOM format

module.exports.noaaActiveAlertChecker = callback => axios.get(noaaAPI + activeAlertsEndPoint)
  .then(response => callback(null, response.data))
  .catch(error => callback(error.respose, null))
