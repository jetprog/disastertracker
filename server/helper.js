//helpers
const db = require('../database/utils.js');

const postRes = (promise, res, errMessage, successStatus = 201, errStatus = 400) =>
  promise
    .then(data => data && res.sendStatus(successStatus))
    .catch(err => res.status(errStatus).send({ serverMessage: errMessage, error: err }));

const login = (req, res) =>{
  // if(req.body.type && req.body.type === "facebook"){
  //   db.saveFacebookUser(req.body, (err, user)=>{
  //     if(err){
  //       res.status(400).send('User can\'t login');
  //     }else{
  //       req.session.regenerate(() =>
  //         res
  //         .status(200)
  //         .send((req.session.user = req.body.username) && req.session))
  //     }
  //   })
  // }

    db.getUserInfo(req.query.username)
    .then((user) => {
      if(req.query.password === user.password) {
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

exports.login = login;
exports.signup = signup;