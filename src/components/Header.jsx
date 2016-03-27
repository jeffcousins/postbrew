import React from 'react';

const Header = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    title: React.PropTypes.string
  },

  render () {
    const style = {color: this.props.color};

    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    );
  }
});

module.exports = Header;
