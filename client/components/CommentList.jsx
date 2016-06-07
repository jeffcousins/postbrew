import React from 'react';
import CommentItem from './CommentItem';

const { array, bool, number } = React.PropTypes;

const CommentList = React.createClass({
  propTypes: {
    comments: array,
    isRoot: bool
  },
  renderComments () {
    return this.props.comments.map((comment) => {
      return (
        <CommentItem key={comment.id} {...comment} />
      );
    });
  },
  render () {
    const styles = {
      paddingBottom: 0,
      paddingLeft: 0,
      marginLeft: 0
    };

    if (!this.props.comments.length) {
      return;
    }

    if (!this.props.isRoot) {
      styles.paddingLeft = 30;
    }

    return (
      <div className='ui comments' style={styles}>
        {this.renderComments()}
      </div>
    );
  }
});

export default CommentList;
