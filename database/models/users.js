const db = require('../config');

var user = db.Model.extend({
    tableName: 'users',
    hasTimeStamps: true,
});

module.exports = db.Model('user', user );
