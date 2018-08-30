const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const log = require('ololog');
const helpers = require('./helper.js');
const user = require('./util/users.js');
const loc = require('./util/location.js');

const app = express();

app.use(
  require('express-session')({
    secret: 'repalceByRightkey@110',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', function(req, res) {
  res.redirect('/');
});

app.get('/api/', function (req, res) {
  res.send('Server running')
});

app.post('/api/login', helpers.login);

app.get('/api/logout', helpers.logout);

app.post('/api/signup', helpers.signup);

app.get('/api/event', helpers.checkLoggedIn, function(req, res) {
  res.send('Server running');
});

// app.get('/api/location', helpers.checkLoggedIn, user.userLocation);

app.post('/api/location', helpers.checkLoggedIn, loc.saveLocation);

app.put('/api/location', helpers.checkLoggedIn, loc.updateLocation);

app.delete('/api/location', helpers.checkLoggedIn, loc.deleteLocation);

//include user location, array of locations.
app.get('/api/user', helpers.checkLoggedIn, user.userLocation);

app.post('/api/user', helpers.checkLoggedIn, function(req, res) {
  res.send('Server running');
});

app.put('/api/user', helpers.checkLoggedIn, function(req, res) {
  res.send('Server running');
});

app.delete('/api/user');

const port = process.env.PORT || 3000;

app.listen(port, function() {
  log(`Application listening on port ${port}`);
})
