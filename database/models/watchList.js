const db = require('../config.js');
const User = require('../users.js');
const Event = require('../event.js');

var watchList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(User, 'user_id');
    },
    eventID: function() {
        return this.belongsTo(Event, 'event_id');
    },
});

module.exports = db.model('watchList', WatchList);