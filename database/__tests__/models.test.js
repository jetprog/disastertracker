const db = require('../utils.js');

describe('database models', () => {

  test('should save the user', async () => {
    db.saveUser({ username: 'JDoe', password: 'admin', firstName: 'John', lastName: 'Doe' })
      .then(() => {
        new User({ username: user.username }).fetch().then(found => expect(found).toEqual({ username: 'JDoe' }));
      })
      .catch(() => expect(1).toEqual(2));
  });
});