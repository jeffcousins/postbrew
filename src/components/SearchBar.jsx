import React from 'react';
// import data from '../../public/data';
import { Link } from 'react-router';

const style = {
  float: 'right'
};

style.input = {
  height: '20px',
  width: '120px'
};

style.button = {
  height: '20px'
};

const Search = React.createClass({
  getInitialState () {
    return {
      searchQuery: ''
    };
  },
  handleSearchEvent (event) {
    this.setState({searchQuery: event.target.value});
  },
  render () {
    return (
      <div style={style}>
        <input value={this.state.searchQuery} type='text' style={style.input}
          onChange={this.handleSearchEvent} placeholder='Search' />
        <Link to={`/content/${this.state.searchQuery}`}>
          <button style={style.button}>Get Content</button>
        </Link>
      </div>
    );
  }
});

export default Search;
