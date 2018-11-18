const http = require('http');
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '/../public');

var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(publicPath + '/index.html');
});

app.listen(9000, ()=>console.log('Listening on server 9000'));
