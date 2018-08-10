const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.get('/home', function(req, res) {
    res.send('Server running');
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Application listening on port ${port}`);
})