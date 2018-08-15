var db = require('../config.js');
var Event = require('../models/event.js');

var Event = new db.Collection();

Event.model = Event;

module.exports = Event;