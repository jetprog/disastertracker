var db = require('../config.js');
var CurrentLocation = require('../models/currentLocation.js');

var CurrentLocations = new db.Collection();

CurrentLocations.model = CurrentLocation;

module.exports = CurrentLocations;