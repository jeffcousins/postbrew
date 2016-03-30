import React from 'react';

const PostItem = (props) => (
  <div>
    <h3>{props.title}</h3>
    <h4>{props.author}</h4>
    <p>{props.content}</p>
  </div>
);

const { string } = React.PropTypes;

PostItem.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  content: string.isRequired
};

export default PostItem;
