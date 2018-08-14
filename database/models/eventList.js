const db = require('../config.js');
const event = require('../event.js');
const category = require('../category.js');

var eventList = db.Model.extend({
    tableName: 'category',
    hasTimeStamps: true,
    eventID: function() {
        return this.belongsTo(event, 'event_id');
    },
    categoryID: function() {
        return this.belongsTo(category, 'category_id');
    },
});

module.exports = require('eventList', eventList);