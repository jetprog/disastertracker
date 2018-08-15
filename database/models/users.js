const db = require('../config.js');

var User = db.Model.extend({
    tableName: 'user',
    hasTimeStamps: true
});

module.exports = db.model('User', User );
