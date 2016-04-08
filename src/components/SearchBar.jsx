import React from 'react';
import { Link } from 'react-router';

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
      <form onSubmit={this.handleSearchEvent}>
        <div className="ui input">
          <input value={this.state.searchQuery} type='text'
            onChange={this.handleSearchEvent} placeholder='Search' />
        </div>
      </form>
    );
  }
});

export default Search;
