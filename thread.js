var express = require('express');
var app = express();
var morality = require('verbal-morality');
var bullshit = require('industry-bullshit');
var https = require('https'),
    fs = require('fs');
    
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


app.get('/listen', (req, res) => {
  let moralityLevel = morality(req.query.term);
  let moralityFine = moralityLevel > 1 ? moralityLevel : 0;
  let moralityText = moralityLevel > 3 ? "intolerably immoral" : "unnacceptably immoral";
  let bullshitScore = bullshit.score(req.query.term);
  let bullshitText = bullshitScore > 3 ? "is complete nonsense" : "sounds a bit nonsensical";

  res.json({
    moralityLevel: moralityLevel,
    moralityFine: moralityFine,
    moralityText: moralityText,
    bullshitScore: bullshitScore,
    bullshitText: bullshitText
  });
});

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

var secureServer = https.createServer({
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
    ca: fs.readFileSync('./ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
}, app).listen('3030', function() {
    console.log("Secure Express server listening on port 3030");
});
