const db = require('../config.js');

var friendsList = db.Model.extend({
    tableName:'friendsList',
    hasTimeStamps: true,
});

var user = db.Model.extend({
    tableName: 'users',
    hasTimeStamps: true,
    contacts: function() {
        return this.belongsTo(contactList, 'user_id');
    },
    friends: function() {
        return this.belongsTo(friendsList, 'user_id');
    },
    watchList: function() {
        return this.belongsTo(watchList, 'user_id');
    },
    currentLocation: function() {
        return this.belongsTo(currentLocation, 'user_id');
    },
});

var contactList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
});

var contact = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
    contactList: function() {
        return this.belongsTo(contactList, 'contact_id');
    },
});

var currentLocation = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
});

var locations = db.Model.extend({
    tableName: '',
    hasTimeStamps: true,
    geolocation: function() {
        return this.belongsTo(currentLocation, 'location_id')
    },
});

var watchList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
});

var event = db.Model.extend({
    tableName: 'event',
    hasTimeStamps: true,
    watchList: function() {
        return this.belongsTo(watchList, 'event_id');
    },
    category: function() {
        return this.belongsTo(eventList, 'event_id');
    },
});

var eventList = db.Model.extend({
    tableName: 'category',
    hasTimeStamps: true,
});

var category = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
    eventList: function() {
        return this.belongsTo(eventList, 'category_id');
    },
});
