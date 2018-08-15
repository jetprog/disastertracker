const db = require('../config.js');

var Location = db.Model.extend({
    tableName: 'location',
    hasTimeStamps: true,
});

module.exports = db.model('Locations', Location);