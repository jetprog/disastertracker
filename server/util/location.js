const db = require('../../database/utils.js');

exports.saveLocation = (req, res) => {
  let userID = req.body.user_id;
  db.saveLocation(req.body, userID, function (user) {
    if (user) {
      delete user['password'];
      res.status(200).send(user);
    } else {
      res.status(400).send("can't save location");
    }
  })
}

exports.deleteLocation = (req, res) => {
  let locationID = req.query.location_id;
  let userID = req.session.user;
  db.deleteLocation(locationID, userID, function (user) {
    if (user) {
      delete user['password'];
      res.status(200).send(user);
    } else {
      res.status(400).send("no location for this id");
    }
  })
}

exports.updateLocation = (req, res) => {
  let userID = req.session.user;
  db.updateLocation(req.body, userID, (user) => {
    if (user) {
      delete user['password'];
      res.status(200).send(user);
    } else {
      res.status(400).send("no location for this id");
    }
  })
}