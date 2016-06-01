import React from 'react';
import CommentItem from './CommentItem';

const { array } = React.PropTypes;

const CommentList = React.createClass({
  propTypes: {
    comments: array
  },
  renderComments () {
    return this.props.comments.map((comment) => {
      return (
        <CommentItem key={comment.id} {...comment} />
      );
    });
  },
  render () {
    return (
      <div className='ui threaded comments'>
        {this.renderComments()}
      </div>
    );
  }
});

export default CommentList;
