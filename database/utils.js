const db = require('./config.js')
const Users = require('./collections/users.js')
const User = require('./models/users.js')
const Contacts = require('./collections/users.js')
const Contact = require('./models/users.js')
const Events = require('./collections/users.js')
const Event = require('./models/users.js')
const Locations = require('./collections/users.js')
const Location = require('./models/users.js')

//export saves user to database input fields are (username, password)

exports.saveUser = user =>
  new Promise(function (resolve, reject) {
    new User({
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      e_personnel: user.e_personnel
     }).fetch().then(save => (save ? reject() : Users.create(user).then(resolve)));
  });

//Get all information of the user that is currently logged in without a password for security purposes.
exports.getUser = (username) => {
    new Promise(resolve => new User({
      username: username }).fetch().then(found => resolve(delete found.attributes.password && found.attributes)))
}

exports.getUserInfo = email =>
  new Promise(function (resolve, reject) {
    new User({
      username: username })
      .fetch()
      .then(found => (found ? resolve(found.attributes) : reject()));
  });

//By default bookshelf use promises
exports.getUserLoc = id =>
  new Promise(function (resolve, reject) {
    new User({ user_id: id })
      .fetch({ withRelated: ['location'] })
      .then(found => (found ? resolve(found.related('location')) : reject()));
  });

//export saves event to database input fields are (event_name: event_name)
exports.saveEvent = event =>
    new Promise(function (resolve, reject) {
        new Event({
          event_name: event.event_name,
          severity: event.severity,
          status: event.status,
          expires: event.expires,
          urgency: event.urgency,
          description: event.description,
          affected_zones: event.affected_zones,
          instructions: event.instructions,
          headline: event.headline,
          coordinates: event.coordinates
         }).fetch().then(save => (save ? reject() : Events.create(event).then(resolve)));
    })

//export saves contact to database
exports.saveContact = contact =>
  new Promise(function (resolve, reject) {
    new Contact({
      contact: contact.contact_name,
      phone_number: contact.phone_number,
      address: contact.address
    }).fetch().then(save => (save ? reject() : Contacts.create(contact).then(resolve)));
  })

//Save location
exports.saveLocation = (location, userID, cb) => {
  location['user_id'] = userID;
  new Location({})
  .save(location, {method: 'insert'})
  .then(function(model) {
    cb(model)
  })
  .catch(function(error){
    console.log(error);
  })
}

//export saves category to database input fields are (event_name: event_name),
//this table holds the different categories of events, it does not hold the event information just the event itself
exports.saveCategory = category =>
    new Promise(function (resolve, reject) {
        new Category({event_name: event.event_name }).fetch().then(save => (save ? reject() : Categories.create(category).then(resolve)));
    })

//export saves coordinates to database (e.g - [[[12312.098109238210, 12932.100981239012]]])
exports.saveLocation = location =>
  new Promise(function (resolve, reject) {
    new Location({
      location: location.location_coordinates,
      }).fetch().then(save => (save ? reject() : Locations.create(location).then(resolve)))
  })
