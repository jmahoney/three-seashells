var express = require('express');
var app = express();
var http = require('http').Server(app);
var morality = require('verbal-morality');
var bullshit = require('industry-bullshit');

app.use(express.static('public'));

app.get('/level', (req, res) => {
  let score = morality(req.query.term) + (bullshit.score(req.query.term) * 2);
  let message = '';
  switch(score) {
    case 1:
      message = ' is slightly immoral. Be careful, this is a pee see work environment';
      break;
    case 2:
      message = ' is immoral. You are running the risk of being fined';
      break;
    case 3:
    case 4:
    case 5:
      message = ' is significantly immmoral. A fine has been issued.';
      break;
  }
  res.send(req.query.term + message);
});

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

http.listen(3030, () => console.log('listening on *:3030'));
