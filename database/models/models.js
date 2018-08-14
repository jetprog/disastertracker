const db = require('../config.js');

var friendsList = db.Model.extend({
    tableName:'friendsList',
    hasTimeStamps: true,
    friends: function() {
        return this.belongsTo(user, 'user_id');
    },
});

var user = db.Model.extend({
    tableName: 'users',
    hasTimeStamps: true,
});

var contactList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(user, 'user_id');
    },
    contactID: function() {
        return this.belongsTo(contactList, 'contact_id');
    },
});

var contact = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});

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

var locations = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
});

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

var event = db.Model.extend({
    tableName: 'event',
    hasTimeStamps: true,
});

var eventList = db.Model.extend({
    tableName: 'category',
    hasTimeStamps: true,
    eventID: function() {
        return this.belongsTo(eventID, 'event_id');
    },
    categoryID: function() {
        return this.belongsTo(category, 'category_id');
    },
});

var category = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});
