var app = require('express')();
var http = require('http').Server(app);

app.get('/level', function(req, res){
  res.send('you crazy ' + req.query.term);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

http.listen(3030, function(){
  console.log('listening on *:3030');
});
