const path = require('path');

var db = require('bookshelf')(knex);

knex.schema.hasTable('users').then(function(exists) {
    if(!exists) {
        return knex.schema.createTable('users', function(data) {
            data.increments('id').primary();
            data.string('username', 100);
            data.string('password', 100);
            data.string('first_name', 100);
            data.string('last_name', 100);
            data.string('current_location', 100);
        })
    }.then(function(table) {
        console.log(`${table} created`);
    })
})