var React = require('react');
var Puppy = require('./puppy.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div id="app">
        <Puppy />
      </div>
    );
  }

});

module.exports = App;
