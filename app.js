var express = require('express');
var app = express();
var http = require('http').Server(app);

var bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));



app.post('/', function (req, res) {
  

  res.json({text: "test"});
});




http.listen(4000, function () {
  console.log('listening on port 4000!');
});

