const db = require('../config.js');

var event = db.Model.extend({
    tableName: 'event',
    hasTimeStamps: true,
});


module.exports = db.model('event', event);