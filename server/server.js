const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const log = require('ololog')

const app = express()

app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../client/dist`))

app.get('/', function (req, res) {
  res.send('Server running')
});

app.get('/api/user');

app.put('/api/user');

app.delete('/api/user');

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  log(`Application listening on port ${PORT}`)
})
