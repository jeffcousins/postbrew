import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import parseDomain from 'parse-domain';

const smallGrayStyle = {
  'fontSize': '11',
  'color': 'gray'
};

const PostItem = (props) => {
  console.log('post item props')
  console.log(props);
  const { title, username, createdAt, url, brew_name, id } = props.data;

  function urlHandler (providedUrl, title, brew_name, id) {
    if (!providedUrl) {
      return (
        <div>
          <Link to={`/b/${brew_name}/${id}`}>{title}</Link>
        </div>
      );
    } else {
      if (providedUrl.slice(0, 7) !== 'http://') {
        providedUrl = `http://${providedUrl}`;
      }

      let parsed = parseDomain(providedUrl);

      return (
        <div>
          <a href={providedUrl}>{title}</a> <span style={smallGrayStyle}>
            [ {parsed.domain}.{parsed.tld} ]
          </span>
        </div>
      );
    }
  }

  const timeAgo = moment(createdAt).startOf('hour').fromNow();

  return (
    <div className='item'>
      <div className='content'>
        <div className='header'>
          {urlHandler(url, title, brew_name, id)}
        </div>
        <div className='description'>
          Submitted {timeAgo} by <Link to={`/u/${username}`}>{username}</Link>
        </div>
        <div style={smallGrayStyle} className='extra'>
          [Comments]
        </div>
      </div>
    </div>
  );
};

const { object } = React.PropTypes;

PostItem.propTypes = {
  data: object
};

export default PostItem;
