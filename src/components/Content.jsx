import React from 'react';
import PostItem from './PostItem';

const Content = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },
  render () {
    return (
      <div>
        <h1>{this.props.params.title}</h1>
        <hr />
        <h2>Posts:</h2>
        {this.props.params.posts.map((post) => (
          <PostItem {...post} key={post._id} />
        ))}
      </div>
    );
  }
});

module.exports = Content;
