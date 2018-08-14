const db = require('../config.js');
const User = require('../users.js');
const Locations = require('../locations.js');

var CurrentLocation = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(User, 'user_id');
    },
    locationID: function() {
        return this.belongsTo(Locations, 'location_id')
    },
});

module.exports = db.model('CurrentLocation', CurrentLocation);