var db = require('../config.js');
var Contact = require('../models/contacts.js');

var Contacts = new db.Collection();

Contacts.model = Contact;

module.exports = Contacts;