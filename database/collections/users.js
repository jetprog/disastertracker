var db = require('../config.js');
var User = require('../models/users.js');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;