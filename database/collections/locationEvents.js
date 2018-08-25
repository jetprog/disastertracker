var db = require('../config.js');
var EventLocation = require('../models/locationEvent.js');

var EventLocations = new db.Collection();

EventLocations.model = EventLocation;

module.exports = EventLocations;