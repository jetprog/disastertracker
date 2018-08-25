const db = require('../config.js');
const MultiPolygon = require('./multiPolygon.js');

const Event = db.Model.extend({
    tableName: 'event',
    hasTimeStamps: true,
    multiPolygon: function () {
      return this.belongsTo(MultiPolygon);
    }
});


module.exports = db.model('Event', Event);