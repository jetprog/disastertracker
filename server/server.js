const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const log = require('ololog')
const utils = require('./helper.js')
const user = require('./util/users.js')

const app = express()

app.use(
  require('express-session')({
    secret: 'repalceByRightkey@110',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client/dist`))

app.get('/', function(req, res) {
  res.redirect('/');
});

app.get('/api/', function (req, res) {
  res.send('Server running')
});

app.post('/api/login', utils.login);

app.post('/api/signup', utils.signup)

app.get('/api/event', utils.checkLoggedIn, function(req, res) {
  res.send('Server running')
});

app.get('/api/location', utils.checkLoggedIn, function(req, res) {
  res.send('Server running')
});

//include user location, array of locations.
// app.get('/api/user', utils.checkLoggedIn, user.userLoc);

app.post('/api/user', utils.checkLoggedIn, function(req, res) {
  res.send('Server running')
});

app.put('/api/user', utils.checkLoggedIn, function(req, res) {
  res.send('Server running')
});

app.delete('/api/user');

const port = process.env.PORT || 3000

app.listen(port, function() {
  log(`Application listening on port ${port}`)
})