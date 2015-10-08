var React = require('react');

var Puppy = React.createClass({
  render: function() {
    return (
      <div>
        <iframe style={{width:100+'%', height:100+'%'}} src="https://www.youtube.com/embed/VnmlXYGPB14?autoplay=1" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
});

module.exports = Puppy;
