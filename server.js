var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('This is main page');
});

app.get('/index.html', function (req, res) {
  res.send('This is index.html');
});

app.get('/category.html', function(req, res) {
  res.send('This is category.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});