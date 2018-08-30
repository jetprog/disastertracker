const db = require('../config.js');
const Polygon = require('./coordinates.js');

var MultiPolygon = db.Model.extend({
  tableName: 'multi_polygon',
  hasTimeStamps: true,
  polygon: function () {
    return this.hasMany(Polygon, 'multi_polygon_id');
  },

});

module.exports = db.model('MultiPolygon', MultiPolygon);
