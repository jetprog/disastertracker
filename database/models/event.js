const db = require('../config.js');

var Event = db.Model.extend({
    tableName: 'event',
    hasTimeStamps: true,
});


module.exports = db.model('Event', Event);