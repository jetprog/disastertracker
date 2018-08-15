var db = require('../config.js');
var FacebookUser = require('../models/facebookUser.js');

var FacebookUsers = new db.Collection();

FacebookUsers.model = FacebookUser;

module.exports = FacebookUsers;