var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <div id="app">
        <input type="text" x-webkit-speech />
      </div>
    );
  }
});

module.exports = App;
