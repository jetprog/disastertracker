const db = require('../../database/utils.js');

exports.userLocation = (req, res)=> {
  let userID = req.session.user.user_id
  db.getUserLoc(userID, function(user){
    if(user){
      res.status(200).send(user.location);
    }else{
      res.status(400).send("can't retrieve location for this user");
    }
  })
}