import React from 'react';
import PostList from './PostList';
import { connector } from '../store/store';

const BrewContent = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    forums: React.PropTypes.object
  },
  getForumData (b) {
    return this.props.forums[b] || null;
  },
  render () {
    const forum = this.getForumData(this.props.params.b);
    if (forum === null) {
      return (
        <div>
          <h2>No results found for {this.props.params.b}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{forum.title}</h1>
          <hr />
          <h2>Posts:</h2>
          <PostList forum={forum} />
        </div>
      );
    }
  }
});

export default connector(BrewContent);
