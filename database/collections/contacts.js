var db = require('../config.js');
var Contact = require('../models/user.js');

var Contacts = new db.Collection();

Contacts.model = Contact;

module.exports = Contacts;