const db = require('../utils.js');
const Users = require('../collections/users.js');
const User = require('../models/users.js');

describe('database models', () => {

  test('should save the user', async () => {
    db.saveUser({ username: 'JDoe', password: 'admin', firstName: 'John', lastName: 'Doe' })
      .then(() => {
        new User({ username: user.username }).fetch().then(found => expect(found).toEqual({ username: 'JDoe' }));
      })
      .catch(() => expect(1).toEqual(2));
  });
});