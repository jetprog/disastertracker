const path = require('path');

var knex = require('knex')({
    client:'mysql',
    connection: process.env.DATABASE_URL || {
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    userNullAsDefault: true,
});

var db = require('bookshelf')(knex);

db.plugin('registry');

db.knex.schema.hasTable('user').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('user', function(user) {
            user.increments('user_id').primary();
            user.string('email', 30).unique();
            user.string('password', 30);
            user.string('first_name', 20);
            user.string('last_name', 20);
            user.bool('E-personnel');
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('event').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('event', function(event) {
            event.increments('event_id').primary();
            event.string('severity', 20);
            event.string('status', 20);
            event.date('expires');
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

db.knex.schema.hasTable('contact').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('contact', function(contact) {
            contact.increments('contact_id').primary();
            contact.string('name', 20);
            contact.integer('phone_number');
            contact.string('address', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('location').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('location', function(location) {
            location.increments('location_id').primary();
            location.string('loc_name', 100);
            location.string('lat', 100);
            location.string('long', 100);
            location.string('type', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('location_watch').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('location_watch', function(location) {
            location.increments('location_watch_id').primary();
            location.integer('user_id');
            location.integer('location_id');
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('category').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('category', function(category) {
            category.increments('event_id').primary();
            category.string('event_name').unique();
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

module.exports = db;