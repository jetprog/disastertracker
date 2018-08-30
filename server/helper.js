const db = require('../database/utils.js');
const bcrypt = require('bcrypt');

const hashPass = (pass, cb) => {
  bcrypt.hash(pass, 10, function(err, hash) {
    cb(hash);
  });
}

const decrypt = (password, hashPass, cb) => {
  bcrypt.compare(password, hashPass, function(err, res) {
      cb(res);
  });
}

// Create user login process
exports.login = (req, res) => {
  if (req.body.type && req.body.type === 'social') {
    db.getUserInfo(req.body.email)
      .then(user => {
        if (user) {
          req.session.regenerate(() =>
            res.status(200).send((req.session.user = user))
          )
        } else {
          db.saveUser(req.body)
            .then(user => {
              req.session.regenerate(() =>
                res.status(200).send((req.session.user = user))
              )
            })
            .catch(function (err) {
              res
                .status(400)
                .send({ serverMessage: 'User alredy exists', error: err })
            })
        }
      })
      .catch(function (err) {
        res.status(400).send({ serverMessage: 'Wrong username', error: err })
      })
  } else {
    db.getUserInfo(req.body.email, userData => {
      decrypt(req.body.password, userData.password, (response) => {
        if(response){
          req.session.regenerate(() => {
            req.session.user = userData.user_id
            res.status(200).send((userData))
          })
        }else {
          res.status(400).send('Wrong password')
        }
      })
    })
  }
}

exports.logout = (req, res) => req.session.destroy(() => res.sendStatus(200))

// Signup method for user
exports.signup = (req, res) => {
  hashPass(req.body.password, (password)=>{
    req.body.password = password;
    db.saveUser(req.body)
    .then(user => {
      req.session.regenerate(() =>
        res.status(200).send((req.session.user = user.user_id))
      )
    })
    .catch(function (err) {
      res.status(400).send({ serverMessage: 'User alredy exists', error: err })
    })
  });
}

// Middleware make sure user is logged
exports.checkLoggedIn = (req, res, next) =>
  req.session.user ? next() : res.status(401).send('user not logged in')

