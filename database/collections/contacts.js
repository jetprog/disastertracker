var db = require('../config.js');
var Contacts = require('../models/user.js');

var Contacts = new db.Collection();

Contacts.model = Contacts;

module.exports = Contacts;