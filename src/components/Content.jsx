import React from 'react';
import PostItem from './PostItem';
import data from '../../public/data';

const Content = React.createClass({
  render () {
    return (
      <div>
        <h1>JavaScript</h1>
        <hr />
        <h2>Posts:</h2>
        {data.javascript.posts.map((post) => (
          <PostItem {...post} key={post._id} />
        ))}
      </div>
    );
  }
});

export default Content;
