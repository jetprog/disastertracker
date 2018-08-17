const db = require('../database/utils.js');

const login = (req, res) =>{
  if(req.body.type && req.body.type === "social"){
    db.getUserInfo(req.body.email)
    .then((user) => {
      if(user){
        req.session.regenerate(() =>
          res
          .status(200)
          .send(req.session.user = user))
      }else {
        db.saveUser(req.body)
        .then((user) => {
          req.session.regenerate(() =>
            res
            .status(200)
            .send(req.session.user = req.body))
        })
        .catch(function (err) {
          res.status(400).send({ serverMessage: "User alredy exists", error: err })
        });
      }
    })
    .catch(function (err) {
      res.status(400).send({ serverMessage: "Wrong username", error: err })
    });
  }
  else{
    db.getUserInfo(req.body.email)
    .then((user) => {
      if(req.body.password === user.password) {
        delete user.password;
        req.session.regenerate(() =>
          res
          .status(200)
          .send(req.session.user = user))
      }
      else{
        res.status(400).send('Wrong password');
      }
    })
    .catch(function (err) {
      res.status(400).send({ serverMessage: "Wrong username", error: err })
    });
  }
}

const signup = (req, res) =>{
  db.saveUser(req.body)
  .then((user) => {
    req.session.regenerate(() =>
      res
      .status(200)
      .send(req.session.user = req.body))
  })
  .catch(function (err) {
    res.status(400).send({ serverMessage: "User alredy exists", error: err })
  });

}


const checkLoggedIn = (req, res, next) => (req.session.user ? next() : res.status(401).send('user not logged in'));

exports.login = login;
exports.signup = signup;
exports.checkLoggedIn = checkLoggedIn;