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

  if (text_content == '1')
    io.emit('text', 1);
  else if (text_content == '2')
    io.emit('text', 2);
  else if (text_content == '3')
    io.emit('text', 3);
  else
    io.emit('text', 4);

  res.json({text: req.body.Body});
});


io.on('connection', function(socket){
  console.log('connected');
});

http.listen(4000, function () {
  console.log('listening on port 4000!');
});

