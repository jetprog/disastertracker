var db = require('../config.js');
var Event = require('../models/event.js');

var Events = new db.Collection();

Events.model = Event;

module.exports = Events;