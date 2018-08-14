const db = require('../config.js');

var friendsList = db.Model.extend({
    tableName:'friendsList',
    hasTimeStamps: true,
    friends: function() {
        return this.belongsTo(user, 'user_id');
    },
});


module.exports = db.model('friendsList', friendsList);
