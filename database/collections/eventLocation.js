var db = require('../config.js');
var EventLocation = require('../models/eventlocation.js');

var EventsLocation = new db.Collection();

EventLocations.model = EventLocation;

module.exports = EventLocation;