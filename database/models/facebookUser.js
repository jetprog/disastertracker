const db = require('../config.js');

var FacebookUser = db.Model.extend({
    tableName: 'facebookUsers',
    hasTimeStamps: true
});

module.exports = db.model('FacebookUser', FacebookUser );
