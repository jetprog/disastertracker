const db = require('../config.js');
const User = require('../users.js');

var FriendsList = db.Model.extend({
  tableName: 'friendsList',
  hasTimeStamps: true,
  friends: function () {
    return this.belongsTo(User, 'user_id')
  }
})

module.exports = db.model('FriendsList', FriendsList)
