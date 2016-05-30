import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const PostItem = (props) => {
  console.log('post item props')
  console.log(props);
  const { title, username, createdAt, url, brew_name, id } = props.data;

  function urlHandler (providedUrl, title, brew_name, id) {
    if (!providedUrl) {
      return (
        <Link to={`/b/${brew_name}/${id}`}>{title}</Link>
      );
    } else {
      if (providedUrl.slice(0, 7) !== 'http://') {
        providedUrl = `http://${providedUrl}`;
      }

      return (
        <a href={providedUrl}>{title}</a>
      );
    }
  }

  const timeAgo = moment(createdAt).startOf('hour').fromNow();

  return (
    <div className='item'>
      <a href='www.reddit.com'>reddit</a>
      <div className='content'>
        <div className='header'>
          {urlHandler(url, title, brew_name, id)}
        </div>
        <div className='description'>
          Submitted {timeAgo} by {username}</div>
      </div>
    </div>
  );
};

const { object } = React.PropTypes;

PostItem.propTypes = {
  data: object
};

export default PostItem;
