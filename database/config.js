
const path = require('path');
<<<<<<< HEAD
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
=======

var Knex = require('knex')({
    client:'mysql',
    connection: process.env.DATABASE_URL || {
        host:'localhost',
        user:'event_tracker',
        password:'thesis',
        database:'test_db'
    }
>>>>>>> inital db
});

var db = require('bookshelf')(knex);

<<<<<<< HEAD
db.knex.hasTbale('user').then(function(exists) {
    if (!exists) {
        db.knex.createTable('user', function(user) {
            user.increments('user_id').primary();
            user.string('username', 30).unique();
            user.string('password', 30);
            user.string('first_name', 20);
            user.string('last_name', 20);
            user.bool('E-personnel');
=======
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
>>>>>>> inital db
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> inital db
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
<<<<<<< HEAD
});

db.knex.hasTable('contact').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('contact', function(contact) {
            contact.increments('contact_id').primary();
            contact.string('name', 20);
            contact.integer('phone_number');
            contact.string('address', 100);
=======
})


db.knex.schema.hasTable('location_watch').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('event', function(loc) {
            loc.increments('location_id').primary();
            loc.string('location', 100).unique();
>>>>>>> inital db
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
<<<<<<< HEAD
});

db.knex.hasTable('locations').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('location', function(location) {
            location.increments('location_id').primary();
            location.string('location', 100);
=======
})

db.knex.schema.hasTable('contact_list').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable(function(contact) {
            contact.increments('contact_id').primary();
            contanct.string('name', 100)
            contanct.string('phone_number', 100)
            contanct.string('address', 100);
>>>>>>> inital db
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
<<<<<<< HEAD
});

db.knex.hasTable('category').then(function(exists) {
    if (!exists) {
        db.knex.createdTable('category', function(category) {
            category.increments('event_name').primary();
            category.string('event_name');
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

module.exports = db;
=======
})

db.knex.schema.hasTable('category').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('category', function(category) {
            category.increments('category_id').primary();
            category.string('event_name').unique();
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
})

db.knex.schema.hasTable('coordinates').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('coordinates', function(coordinates) {
            coordinates.increments('coordinates').primary();
            coordinates.string('location')
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
})
<<<<<<< HEAD:database/db.js
>>>>>>> inital db
=======


module.exports = db;
>>>>>>> Additional database changes:database/config.js
