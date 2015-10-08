var express = require('express');
var app = express();
var morality = require('verbal-morality');
var bullshit = require('industry-bullshit');
var https = require('https'),
    fs = require('fs');

app.use(express.static('public'));

app.get('/listen', (req, res) => {
  let moralityLevel = morality(req.query.term);
  let moralityFine = moralityLevel;
  let moralityText = moralityLevel > 3 ? 'intolerably immoral' : 'unnacceptably immoral';
  let bullshitScore = bullshit.score(req.query.term);
  let bullshitText = bullshitScore > 3 ? 'is complete nonsense' : 'sounds a bit nonsensical';

  res.json({
    text: req.query.term,
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
