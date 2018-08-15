const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const log = require('ololog')

const app = express()

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client/dist`))

app.get('/', function(req, res) {
  res.redirect('/');
});

app.get('/api/', function (req, res) {
  res.send('Server running')
});

<<<<<<< HEAD
app.get('/api/event', function(req, res) {
}
=======
app.get('/api/event');

app.get('/api/location');

app.get('/api/user'); //include user location, array of locations.

app.post('/api/user');
>>>>>>> database changes

app.get('/api/location', function(req, res) {

}
//include user location, array of locations.
app.get('/api/user', function(req, res) {

}
app.post('/api/user', function(req, res) {

}

app.put('/api/user', function(req, res) {

});

app.delete('/api/user');

const port = process.env.PORT || 3000

app.listen(port, function() {
  log(`Application listening on port ${port}`)
})
