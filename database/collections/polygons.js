var db = require('../config.js');
var Polygon = require('../models/polygon.js');

var Polygons = new db.Collection();

Polygons.model = Polygon;

module.exports = Polygons;