const db = require('../config.js');
const User = require('../users.js');
const Contacts = require('../contacts.js')

var ContactList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(User, 'user_id');
    },
    contactID: function() {
        return this.belongsTo(Contacts, 'contact_id');
    },
});

module.exports = db.model('contactList', ContactList);
