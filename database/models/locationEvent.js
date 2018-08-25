const db = require('../config.js');

const LocationEvent = db.Model.extend({
  tableName: 'locationEvent',
  hasTimeStamps: true,
});


module.exports = db.model('LocationEvent', LocationEvent);