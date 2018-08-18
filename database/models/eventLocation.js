const db = require('../config.js')
const Event = require('../event.js')
const Location = require('../locations.js')

var EventLocation = db.Model.extend({
  tableName: 'event_location',
  hasTimeStamps: true,
  eventID: function () {
    return this.belongsTo(Event, 'event_id')
  },
  LocationID: function () {
    return this.belongsTo(Location, 'location_id')
  }
})

module.exports = db.model('eventList', EventLocation)