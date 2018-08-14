const db = require('../config.js');

var locations = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
});

module.exports = db.model('locations', locations);