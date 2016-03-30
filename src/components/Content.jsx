import React from 'react';
import PostItem from './PostItem';
import { connector } from '../store/store';

const Content = React.createClass({
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
          {forum.posts.map((post) => (
            <PostItem {...post} key={post._id} />
          ))}
        </div>
      );
    }
  }
});

export default connector(Content);
