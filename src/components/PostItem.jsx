import React from 'react';
import { Link } from 'react-router';

const PostItem = (props) => (
  <div className='item'>
    <div className='content'>
      <div className='header'>{props.data.title}</div>
      <div className='description'>{props.data.username}</div>
      <p>{props.data.createdAt}</p>
    </div>
  </div>
);

const { object } = React.PropTypes;

PostItem.propTypes = {
  data: object
};

export default PostItem;
