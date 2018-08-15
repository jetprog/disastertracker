const db = require('../../database/utils');

const postRes = (promise, res, errMessage, successStatus = 201, errStatus = 400) =>
  promise
    .then(data => data && res.sendStatus(successStatus))
    .catch(err => res.status(errStatus).send({ serverMessage: errMessage, error: err }));

const login = (req, res) =>{
  if(req.body.type && req.body.type === "facebook"){
    db.saveFacebookUser(req.body, (err, user)=>{
      if(err){
        res.status(400).send('User can\'t login');
      }else{
        req.session.regenerate(() =>
          res
          .status(200)
          .send((req.session.user = req.body.username) && req.session)
        )
      }
    }
  // }else{
     //implement our login there
  // }

}

const signup = (req, res) =>{
  db.saveUser(req.body)
  .then((user) => {
    req.session.regenerate(() =>
      res
      .status(200)
      .send((req.session.user = user.username) && req.session)
  })
  .catch(function (err) {
    res.status(400).send({ serverMessage: "User alredy exists", error: err })
  });
}

exports.login = login;
exports.signup = signup;
