const db = require('../../database/utils');

const login = (req, res) =>{
  db.saveFacebookUser(req.body, (err, user)=>{
    req.session.regenerate(() =>
      res
      .status(200)
      .send((req.session.user = req.body.username) && req.session))
  })
}