import React from 'react';
import TopNav from './TopNav';

const style = {
  'fontFamily': 'helvetica'
};

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    const bottom = {
      marginBottom: 20
    };

    return (
      <div style={style}>
        <TopNav />
        <div style={bottom}>
          {this.props.children || <h1>postbrew</h1>}
        </div>
      </div>
    );
  }
});

export default App;
