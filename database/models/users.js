const db = require('../config.js');

var User = db.Model.extend({
<<<<<<< HEAD
<<<<<<< HEAD
    tableName: 'user',
=======
    tableName: 'users',
>>>>>>> changes to database
=======
    tableName: 'user',
>>>>>>> Changed database structure
    hasTimeStamps: true
});

module.exports = db.model('User', User );
