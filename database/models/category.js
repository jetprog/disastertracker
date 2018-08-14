const db = require('../config.js');

var category = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});

module.exports = require('category', category);