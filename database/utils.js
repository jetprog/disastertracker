const db = require('./config.js');
const Users = require('./collections/users.js');
const User = require('./models/users.js');

//export saves user to database input fields are (username, password)
exports.saveUser = (user) => {
    new Promise({function (resolve, reject) {
        new User({ username: user.username }).fetch().then(found => (found ? reject() : users.create(user).then(resolve)));
    }})
}

//Get all information of the user that is currently logged in without a password for security purposes.
exports.getUser = (username) => {
    new Promise(resolve => new User({ username: username }).fetch().then(found => resolve(delete found.attributes.password && found.attributes)))
}