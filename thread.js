var app = require('express')();
var http = require('http').Server(app);
var morality = require('verbal-morality');

app.get('/level', (req, res) => {
  let score = morality(req.query.term);
  let message = 'You are a completely moral being';
  switch(score) {
    case 1:
      message = 'Be careful, this is a pee see work environment';
      break;
    case 2:
      message = 'You are running the risk of being fined';
      break;
    case 3:
    case 4:
    case 5:
      message = 'A fine has been issued. Please proceed to the proctor';
      break;
  }
  res.send(message);
});

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

http.listen(3030, () => console.log('listening on *:3030'));
