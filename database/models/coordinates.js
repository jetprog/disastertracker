const db = require('../config.js');
const Polygon = require('./polygon.js');

var Coordinate = db.Model.extend({
  tableName: 'coordinates',
  hasTimeStamps: true,
  polygon: function () {
    return this.belongsTo(Polygon);
  }
});

module.exports = db.model('Coordinate', Coordinate);
