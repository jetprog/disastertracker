var db = require('../config.js');
var Location = require('../models/locations.js');

var Locations = new db.Collection();

Locations.model = Location;

module.exports = Locations;