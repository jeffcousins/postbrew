import React from 'react';
import TopNav from './TopNav';
import SearchBar from './SearchBar';

const style = {
  'fontFamily': 'helvetica'
};

const App = (props) => (
  <div style={style}>
    <TopNav />
    <SearchBar />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element
};

module.exports = App;
