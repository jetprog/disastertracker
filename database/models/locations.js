const db = require('../config.js');
const User = require('./users.js');

var Location = db.Model.extend({
  tableName: 'location',
  hasTimeStamps: true,
  user: function () {
    return this.belongsTo(User, 'user_id');
  }
})

module.exports = db.model('Location', Location)