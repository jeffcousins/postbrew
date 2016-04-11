import React from 'react';
import TopNav from './TopNav';
const $ = require('jquery');

const style = {
  'fontFamily': 'helvetica'
};

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div style={style}>
        <TopNav forums={this.props.forums} />
        {this.props.children || <h1>postbrew</h1>}
      </div>
    );
  }
});

export default App;
