import React from 'react';
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
    event.preventDefault();
    this.setState({searchQuery: event.target.value});
  },
  render () {
    return (
      <form onSubmit={this.handleSearchEvent} style={style}>
        <input value={this.state.searchQuery} type='text' style={style.input}
          onChange={this.handleSearchEvent} placeholder='Search' />
        <Link to={`/b/${this.state.searchQuery}`}>
          <button style={style.button}>Get Content</button>
        </Link>
      </form>
    );
  }
});

export default Search;
