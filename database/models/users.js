const db = require('../config.js')
const Location = require('../location.js')

var User = db.Model.extend({
  tableName: 'user',
  hasTimeStamps: true,
  locations: function () {
    return this.hasMany(Location, 'user_id')
  }
})

module.exports = db.model('User', User)