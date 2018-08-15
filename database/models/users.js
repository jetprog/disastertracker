const db = require('../config.js');

var User = db.Model.extend({
    tableName: 'users',
    hasTimeStamps: true
});

module.exports = db.model('User', User );
