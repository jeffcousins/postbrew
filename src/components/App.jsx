import React from 'react';
import TopNav from './TopNav';
import SearchBar from './SearchBar';
const $ = require('jquery');

const style = {
  'fontFamily': 'helvetica'
};

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  componentWillMount () {
    if (process.env.BROWSER) {
      $('.ui.dropdown').dropdown('refresh');
    }
  },
  componentDidUpdate () {
    $('.ui.dropdown').dropdown('refresh');
  },
  render () {
    return (
      <div style={style}>
        <TopNav forums={this.props.forums} />
        <SearchBar />
        {this.props.children || <h1>postbrew</h1>}

        {/* Testing Semantic UI classes */}

        <div className='ui selection dropdown'>
          <input type='hidden' name='gender' />
          <i className='dropdown icon'></i>
          <div className='default text'>Dropdown</div>
          <div className='menu'>
            <div className='item' data-value='1'>Rocketship</div>
            <div className='item' data-value='0'>Tortilla</div>
          </div>
        </div>
      </div>
    );
  }
});

export default App;
