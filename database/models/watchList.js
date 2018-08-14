const db = require('../config.js');
const user = require('../user.js');
const event = require('../event.js');

var watchList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(user, 'user_id');
    },
    eventID: function() {
        return this.belongsTo(event, 'event_id');
    },
});

module.exports = db.model('watchList', watchList);