import React from 'react';
import moment from 'moment';
import CommentItem from './CommentItem';

const blue = {
  color: '#2185D0'
};

const CommentList = React.createClass({
  renderComments () {
    if (this.props.comments && this.props.comments.length) {
      return this.props.comments.map((comment) => {
        const { id, username, content, createdAt } = comment;
        const timeAgo = moment(createdAt).startOf('hour').fromNow();
        return (
          <div key={id} className='comment'>
            <div className='content'>
              <a className='author' style={blue}>{username}</a>
              <div className='metadata'>
                <span className='date'>{timeAgo}  </span>
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
      });
    }
  },
  render () {
    return (
      <div className='ui threaded comments'>
        <h3 className='ui dividing header'>Comments</h3>
        {this.renderComments()}
      </div>
    );
  }
});

export default CommentList;
