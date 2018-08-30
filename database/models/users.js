const db = require('../config.js');
const Location = require('./locations.js');

var User = db.Model.extend({
  tableName: 'user',
  hasTimeStamps: true,
  location: function () {
    return this.hasMany(Location);
  }
})

module.exports = db.model('User', User);
