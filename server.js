var app = require('express')();
var http = require('http').Server(app);
var browserify = require('browserify');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var jsx = require('node-jsx');
jsx.install();

var AppView = require('./components/app.jsx');

app.use('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(ReactDOMServer.renderToStaticMarkup(
    React.DOM.body(
      null,
      React.DOM.div({
        id: 'app',
        dangerouslySetInnerHTML: {
          __html: ReactDOMServer.renderToString(React.createElement(AppView))
        }
      })
    )
  ));
});

http.listen(3030, function(){
  console.log('listening on *:3030');
});
