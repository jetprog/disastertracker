const db = require('../config.js');

const LocationEvent = db.Model.extend({
  tableName: 'location_event',
  hasTimeStamps: true,
});


module.exports = db.model('LocationEvent', LocationEvent);