
const path = require('path');
const config = require('../config/config.js');

var Knex = require('knex')({
    client:'mysql',
    connection: process.env.DATABASE_URL || {
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database:'test_db'
    },
    userNullAsDefault: true,
});

var db = require('bookshelf')(knex);

db.knex.hasTable('user').then(function(exists) {
    if (!exists) {
        db.knex.createTable('user', function(user) {
            user.increments('user_id').primary();
            user.string('username', 30).unique();
            user.string('password', 30);
            user.string('first_name', 20);
            user.string('last_name', 20);
            user.bool('E-personnel');
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.hasTable('event').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('event', function(event) {
            event.increments('event_id').primary();
            event.string('severity', 20);
            event.string('status', 20);
            event.data('expires');
            event.string('urgency', 20);
            event.string('description', 100);
            event.string('affected_zones', 100);
            event.string('instructions', 100);
            event.string('headline', 60);
            event.integer('coordinates');
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.hasTable('contact').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('contact', function(contact) {
            contact.increments('contact_id').primary();
            contact.string('name', 20);
            contact.integer('phone_number');
            contact.string('address', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.hasTable('locations').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('location', function(location) {
            location.increments('location_id').primary();
            location.string('location', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.hasTable('category').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('category', function(category) {
            category.increments('event_name').primary();
            category.string('event_name').unique();
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('coordinates').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('coordinates', function(coordinates) {
            coordinates.increments('coordinates').primary();
            coordinates.string('location')
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});


module.exports = db;