import React from 'react';
import TopNav from './TopNav';
import SearchBar from './SearchBar';

const style = {
  'fontFamily': 'helvetica'
};

const App = (props) => (
  <div style={style}>
    <TopNav forums={props.forums} />
    <SearchBar />
    {props.children || <h1>reddux</h1>}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
  forums: React.PropTypes.object
};

export default App;
