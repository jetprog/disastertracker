const db = require('../config.js');
const user = require('../user.js');
const locations = require('../locations.js');

var currentLocation = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(user, 'user_id');
    },
    locationID: function() {
        return this.belongsTo(locations, 'location_id')
    },
});

module.exports = db.Model('currentLocation', currentLocation);