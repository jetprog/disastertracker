const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/home', function(req, res) {
    res.send('Server running');
})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Application listening on port ${port}`);
})