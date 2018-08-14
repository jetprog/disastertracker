var db = require('../config.js');
var Locations = require('../models/locations.js');

var Locations = new db.Collection();

Locations.model = Locations;

module.exports = Locations;