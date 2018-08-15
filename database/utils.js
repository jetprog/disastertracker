const db = require('./config.js');
const Users = require('./collections/users.js');
const User = require('./models/users.js');
const FacebookUsers = require('./collections/facebookUsers.js');
const FacebookUser = require('./models/facebookUser.js');


//export saves user to database input fields are (username, password)
exports.saveUser = (user) => {
    new Promise({function (resolve, reject) {
        new User({ username: user.username }).fetch().then(found => (found ? reject() : users.create(user).then(resolve)));
    }})
}

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
exports.getUser = (username) => {
    new Promise(resolve => new User({ username: username }).fetch().then(found => resolve(delete found.attributes.password && found.attributes)))
}