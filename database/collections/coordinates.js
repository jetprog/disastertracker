var db = require('../config.js');
var Coordinate = require('../models/coordinates.js');

var Coordinates = new db.Collection();

Coordinates.model = Coordinate;

module.exports = Coordinates;