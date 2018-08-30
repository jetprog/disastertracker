const db = require('../config.js');
const MultiPolygon = require('./multiPolygon.js');
const Coordinates = require('./coordinates.js');

var Polygon = db.Model.extend({
  tableName: 'polygon',
  hasTimeStamps: true,
  coordinate: function () {
    return this.hasMany(Coordinates, 'polygon_id');
  },
  multiPolygon: function () {
    return this.belongsTo(MultiPolygon);
  }

})

module.exports = db.model('Polygon', Polygon);
