import React from 'react';
import { Link } from 'react-router';

const PostItem = (props) => (
  <div>
    <Link to={`/thread/${props.p_id}`}>
      <h3>{props.title}</h3>
    </Link>
    <h4>{props.author}</h4>
    <p>{props.content}</p>
  </div>
);

const { string } = React.PropTypes;

PostItem.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  content: string.isRequired,
  p_id: string.isRequired
};

export default PostItem;
