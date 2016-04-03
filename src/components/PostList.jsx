import React from 'react';
import PostItem from './PostItem';
import { connector } from '../store/store';

const PostList = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    forum: React.PropTypes.object
  },
  render () {
    return (
      <div>
        {this.props.forum.posts.map((post) => (
          <PostItem {...post} key={post._id} />
        ))}
      </div>
    );
  }
});

export default connector(PostList);
