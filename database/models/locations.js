const db = require('../config.js');

var Locations = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
});

module.exports = db.model('Locations', Locations);