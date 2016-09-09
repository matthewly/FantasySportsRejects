var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  
  //io.emit('text', req.body.Body);
  console.log(req.body.Body);
  var text_content = req.body.Body;


  res.json({text: req.body.Body});
});


io.on('connection', function(socket){
  console.log('connected');
});

http.listen(4000, function () {
  console.log('listening on port 4000!');
});

