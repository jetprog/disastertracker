var db = require('../config.js');

var contact = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});

module.exports = db.Model('contact', contact);