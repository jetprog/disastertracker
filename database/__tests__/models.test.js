const db = require('../utils.js');
const Users = require('../collections/users.js');
const User = require('../models/users.js');
const Events = require('../collections/event.js');
const Event = require('../models/event.js');
const Categories = require('../collections/category.js');
const Category = require('../models/category.js');
const Contacts = require('../collections/contacts.js');
const Contact = require('../models/contacts.js');
const Locations = require('../collections/locations.js');
const Location = require('../models/locations.js');

describe('database models', () => {

  test('should save the user to user table', async() => {
    db.saveUser({ username: 'JDoe', password: 'admin', firstName: 'John', lastName: 'Doe' })
      .then(() => {
        new User({ username: user.username }).fetch().then(found => expect(found).toEqual({ username: 'JDoe' }));
      })
      .catch(() => expect(1).toEqual(2));
  });

  test('should save event to event table', async() => {
    db.saveCategory({
      event_name: 'hurricane chris',
      severity:'high',
      status: 'active',
      expires: '',
      urgency:'',
      description: '',
      affected_zones: '',
      instructions: '',
      headline: '',
      current_coordinates:''
    }).then(() => {
      new Event({event_name: 'hurricane chris'}).fetch().then(save => expect(save.attributes.event_name).toEqual('hurricane chris'));
    });
  });

  test('should save event to category table', async() => {
    db.saveEvent({
      event_name: 'hurricane chris',

    }).then(() => {
      new Category({event_name: 'hurricane chris'}).fetch().then(save => expect(save.attributes.event_name).toEqual('hurricane chris'));
    });
  });

  test('should save contact name to contact table', async() => {
    db.saveContact({
      contact: 'Son Goku'
    }).then(() => {
      new Contact({contact: 'Son Goku'}).fetch().then(save => expect(save.attributes.contact).toEqual('Son Goku'));
    });
  });

  test('should location to location table', async() => {
    db.saveLocation({
      location: [[[186121.000091283981273, 1192.01298329187987321]]]
    }).then(() => {
      new Contact({location: [[[186121.000091283981273, 1192.01298329187987321]]]}).fetch().then(save => expect(save.attributes.contact).toEqual([[[186121.000091283981273, 1192.01298329187987321]]]));
    });
  });
  
});