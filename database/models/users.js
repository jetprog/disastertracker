const db = require('../config.js');

var User = db.Model.extend({
<<<<<<< HEAD
    tableName: 'user',
=======
    tableName: 'users',
>>>>>>> changes to database
    hasTimeStamps: true
});

module.exports = db.model('User', User );
