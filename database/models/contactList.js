const db = require('../config.js');
const user = require('../user.js');
const contactList = require('../contacts.js')

var contactList = db.Model.extend({
    tableName:'contactList',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(user, 'user_id');
    },
    contactID: function() {
        return this.belongsTo(contacts, 'contact_id');
    },
});

module.exports = db.Model('contactList', contactList);
