var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
  res.send();
});

http.listen(3030, function(){
  console.log('listening on *:3030');
});
