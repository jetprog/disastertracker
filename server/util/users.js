const db = require('../../database/utils.js');

exports.userLocation = (req, res)=> {
  let userID = req.session.user.id
  db.getUserLoc(userID, function(loc){
    if(loc){
      res.status(200).send(loc);
    }else{
      res.status(400).send("can't save location");
    }
  })
}