var db = require('../config.js');
var Category = require('../models/category.js');

var Category = new db.Collection();

Category.model = Category;

module.exports = Category;