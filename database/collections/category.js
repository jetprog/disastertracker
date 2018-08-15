var db = require('../config.js');
var Category = require('../models/category.js');

var Categories = new db.Collection();

Categories.model = Category;

module.exports = Categories;