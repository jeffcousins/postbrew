import React from 'react';
import moment from 'moment';

const { number, string } = React.PropTypes;

const blue = {
  color: '#2185D0'
};

const CommentItem = React.createClass({
  propTypes: {
    id: number,
    username: string,
    content: string,
    createdAt: string
  },
  render () {
    const { id, username, content, createdAt } = this.props;
    const timeAgo = moment(createdAt).startOf('hour').fromNow();

    return (
      <div className='comment'>
        <div className='content'>
          <a className='author' style={blue}>{username}</a>
          <div className='metadata'>
            <span className='date'>{timeAgo}</span>
          </div>
          <div className='text'>
            {content}
          </div>
          <div className='actions'>
            <a className='reply'>Reply</a>
          </div>
        </div>
      </div>
    );
  }
});

export default CommentItem;
