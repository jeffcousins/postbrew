import React from 'react';
import PostItem from './PostItem';
import { connector } from '../store/store';

const Content = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    forums: React.PropTypes.object
  },
  getForumData (f) {
    return this.props.forums[f] || null;
  },
  render () {
    const forum = this.getForumData(this.props.params.f);
    if (forum === null) {
      return (
        <div>
          <h2>No results found for {this.props.params.f}</h2>
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
