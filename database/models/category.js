const db = require('../config.js');

var Category = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});

module.exports = db.model('Category', Category);     