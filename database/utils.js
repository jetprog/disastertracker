const db = require('./config.js');
const Users = require('./collections/users.js');
const User = require('./models/users.js');
const Contacts = require('./collections/users.js');
const Contact = require('./models/users.js');
const Events = require('./collections/users.js');
const Event = require('./models/users.js');
const Locations = require('./collections/users.js');
const Location = require('./models/users.js');
const FacebookUsers = require('./collections/facebookUsers.js');
const FacebookUser = require('./models/facebookUser.js');


//export saves user to database input fields are (username, password)
exports.saveUser = user =>
  new Promise(function (resolve, reject) {
    new User({ username: user.username }).fetch().then(save => (save ? reject() : Users.create(user).then(resolve)));
  });


//fsave acebook user and export
exports.saveFacebookUser = (user, cb) => {
  new FacebookUser({id :user.id}).fetch().then(function (model) {
    if (model) {
      cb(null, model);
    }
    else{
      FacebookUser.create(user).then(cb(null, user));
    }
  })
  .catch(function (err) {
    cb(err);
  });
}

//Get all information of the user that is currently logged in without a password for security purposes.
exports.getUser = (usernam) => {
    new Promise(resolve => new User({ username: usernam }).fetch().then(found => resolve(delete found.attributes.password && found.attributes)))
}

exports.getUserInfo = username =>
  new Promise(function (resolve, reject) {
    new User({ username: username })
      .fetch()
      .then(found => (found ? resolve(found.attributes) : reject()));
  });

//export saves event to database input fields are (event_name: event_name)
exports.saveEvent = event =>
    new Promise(function (resolve, reject) {
        new Event({event_name: event.event_name }).fetch().then(save => (save ? reject() : Events.create(event).then(resolve)));
    })

//export saves category to database input fields are (event_name: event_name),
//this table holds the different categories of events, it does not hold the event information just the event itself
exports.saveCategory = category =>
    new Promise(function (resolve, reject) {
        new Category({event_name: event.event_name }).fetch().then(save => (save ? reject() : Categories.create(category).then(resolve)));
    })

//export saves contact to database
exports.saveContact = contact =>
    new Promise(function (resolve, reject) {
        new Contact({contact: contact.contact_name }).fetch().then(save => (save ? reject() : Contacts.create(contacts).then(resolve)));
    })

//export saves coordinates to database (e.g - [[[12312.098109238210, 12932.100981239012]]])
exports.saveLocation = location =>
    new Promise(function (resolve, reject) {
        new Location({contact: contact.location_coordinates }).fetch().then(save => (save ? reject() : Locations.create(location).then(resolve)));
    })