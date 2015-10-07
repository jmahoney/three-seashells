var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <div id="app">
        <input type="text" x-webkit-speech />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VnmlXYGPB14?autoplay=1" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
});

module.exports = App;
