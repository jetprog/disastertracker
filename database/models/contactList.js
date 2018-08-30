const db = require('../config.js');
const User = require('../users.js');
const Contact = require('../contacts.js');

var ContactList = db.Model.extend({
  tableName: 'contactList',
  hasTimeStamps: true,
  userID: function () {
    return this.belongsTo(User, 'user_id')
  },
  contactID: function () {
    return this.belongsTo(Contact, 'contact_id')
  }
});

module.exports = db.model('contactList', ContactList);
