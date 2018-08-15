const db = require('../config.js');
const Event = require('../event.js');
const Category = require('../category.js');

var EventList = db.Model.extend({
    tableName: 'category',
    hasTimeStamps: true,
    eventID: function() {
        return this.belongsTo(Event, 'event_id');
    },
    categoryID: function() {
        return this.belongsTo(Category, 'category_id');
    },
});

module.exports = db.model('eventList', EventList);