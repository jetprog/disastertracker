const db = require('../config.js');

var Contact = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});

module.exports = db.model('Contact', Contact);