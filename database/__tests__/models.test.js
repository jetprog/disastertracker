const db = require('../utils.js');
const Users = require('../collections/users.js');
const User = require('../models/users.js');
const Events = require('../collections/event.js');
const Event = require('../models/event.js');
const Categories = require('../collections/category.js');
const Category = require('../models/category.js');

describe('database models', () => {

  test('should save the user', async() => {
    db.saveUser({ username: 'JDoe', password: 'admin', firstName: 'John', lastName: 'Doe' })
      .then(() => {
        new User({ username: user.username }).fetch().then(found => expect(found).toEqual({ username: 'JDoe' }));
      })
      .catch(() => expect(1).toEqual(2));
  });

  test('should save event to category', async() => {
    db.saveCategory({
      event_name: 'hurricane chris'
    }).then(() => {
      new Event({event_name: 'hurricane chris'}).fetch().then(found => expect(found.attributes.event_name).toEqual('hurricane chris'));
    });
  });

  test('should save event to category', async() => {
    db.saveEvent({
      event_name: 'hurricane chris'
    }).then(() => {
      new Event({event_name: 'hurricane chris'}).fetch().then(found => expect(found.attributes.event_name).toEqual('hurricane chris'));
    });
  });

});