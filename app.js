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
  
  var text_content = req.body.Body;
  
  io.emit('text', text_content);

  res.json({text: req.body.Body});
});


io.on('connection', function(socket){
  console.log('connected');
});

http.listen(4000, function () {
  console.log('listening on port 4000!');
});

