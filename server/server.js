const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const log = require('ololog')
const utils = require('./helper.js');

const app = express()

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client/dist`))

app.get('/', function(req, res) {
  res.redirect('/');
});

app.get('/api/', function (req, res) {
  res.send('Server running')
});

app.get('/api/event', function(req, res) {
  res.send('Server running')
});

app.get('/api/location', function(req, res) {
  res.send('Server running')
});

//include user location, array of locations.

app.get('/api/user', function(req, res) {
  res.send('Server running')
});

app.post('/api/user', function(req, res) {
  res.send('Server running')
});

app.put('/api/user', function(req, res) {
  res.send('Server running')
});

app.delete('/api/user');

app.post('/api/signup', utils.signup);

const port = process.env.PORT || 3000

app.listen(port, function() {
  log(`Application listening on port ${port}`)
})
