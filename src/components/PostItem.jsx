import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import parseDomain from 'parse-domain';

const smallGrayStyle = {
  'fontSize': '11',
  'color': 'gray'
};

const content = {
  'paddingTop': '15',
  'paddingBottom': '8'
};

const PostItem = (props) => {
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

      const parsed = parseDomain(providedUrl);

      return (
        <div>
          <a href={providedUrl}>{title}</a> <span style={smallGrayStyle}>
            [ {parsed.domain}.{parsed.tld} ]
          </span>
        </div>
      );
    }
  }

  function inBrewName () {
    if (props.pathname === '/') {
      return (
        <span> in <Link to={`/b/${props.data.brew_name}`}
          style={{'color': '#21BA45'}}>{props.data.brew_name}</Link>
        </span>
      );
    }
  }

  const timeAgo = moment(createdAt).startOf('hour').fromNow();

  return (
    <div className='item'>
      <div className='content' style={content}>
        <h3 className='header'>
          {urlHandler(url, title, brew_name, id)}
        </h3>
        <div className='description'>
          Submitted {timeAgo} by <Link to={`/u/${username}`}>{username}</Link>{inBrewName()}
        </div>
        <div style={smallGrayStyle} className='extra'>
          [Comments]
        </div>
      </div>
    </div>
  );
};

const { object, string } = React.PropTypes;

PostItem.propTypes = {
  data: object,
  pathname: string
};

export default PostItem;
