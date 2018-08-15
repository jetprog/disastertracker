var db = require('../config.js');
var Location = require('../models/locations.js');

var Locations = new db.Collection();

Locations.model = Locations;

module.exports = Locations;