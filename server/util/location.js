const db = require('../../database/utils.js');

exports.saveLocation = (req, res) => {
  let userID = req.session.user.user_id
  db.saveLocation(req.body, userID, function (loc) {
    if (loc) {
      res.status(200).send(loc)
    } else {
      res.status(400).send("can't save location")
    }
  })
}