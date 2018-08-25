var db = require('../config.js');
var MultiPolygon = require('../models/multiPolygon.js');

var MultiPolygons = new db.Collection();

MultiPolygons.model = MultiPolygon;

module.exports = MultiPolygons;