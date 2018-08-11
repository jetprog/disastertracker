
const path = require('path');

var Knex = require('knex')({
    client:'mysql',
    connection: {
        host:'localhost',
        user:'event_tracker',
        password:'thesis',
        database:'test_db'
    }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('user').then(function(exists) {
    if (!exists) {
         db.knex.schema.createTable('user', function(user) {
            user.increments('user_id').primary();
            user.string('username', 100).unique();
            user.string('password', 100);
            user.string('first_name', 100);
            user.string('last_name', 100);
            user.string('current_location', 100);
            user.boolean('emergency_personel').defaultTo(false);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
})

db.knex.schema.hasTable('event').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('event', function(event) {
            event.increments('event_id').primary();
            event.string('severity', 30);
            event.string('status', 100);
            event.data('expires');
            event.string('urgency', 100);
            event.string('description', 100);
            event.string('affected_zones', 100);
            event.string('instructions', 100);
            event.string('headline', 100);
            // event.string('category')
            // event.string('coordinates')
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
})


db.knex.schema.hasTable('location_watch').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('event', function(loc) {
            loc.increments('location_id').primary();
            loc.string('location', 100).unique();
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
})

db.knex.schema.hasTable('contact_list').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable(function(contact) {
            contact.increments('contact_id').primary();
            contanct.string('name', 100)
            contanct.string('phone_number', 100)
            contanct.string('address', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
})

db.knex.schema.hasTable('category').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable(function('category') {
            category.increments()
        })
    }
})