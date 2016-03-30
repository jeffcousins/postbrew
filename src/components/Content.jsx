import React from 'react';
import PostItem from './PostItem';

const Content = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },
  render () {
    const params = this.props.params || {};
    const { posts, title } = params;

    return (
      <div>
        <h1>{title}</h1>
        <hr />
        <h2>Posts:</h2>
        {posts.map((post) => (
          <PostItem {...post} key={post._id} />
        ))}
      </div>
    );
  }
});

export default Content;
