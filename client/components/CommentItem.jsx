import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const { number, string, object } = React.PropTypes;

const blue = {
  color: '#2185D0'
};

const CommentItem = React.createClass({
  propTypes: {
    id: number,
    username: string,
    content: string,
    createdAt: string,
    auth: object
  },
  getInitialState () {
    return {
      text: '',
      open: false
    };
  },
  openSwitch (e) {
    this.setState({
      open: !this.state.open
    });
  },
  renderReply () {
    if (!this.props.auth.isSignedIn) {
      return;
    }

    if (!this.state.open) {
      console.log(this.props);
      return (
        <div className='actions'>
          <a className='reply' onClick={() => this.openSwitch()}>Reply</a>
        </div>
      );
    }

    return (
        <div className='actions'>
          <textarea></textarea>
          <br />
          <a className='reply' onClick={() => this.openSwitch()}>Cancel</a>
        </div>
      );
  },
  render () {
    const { id, username, content, createdAt } = this.props;
    const timeAgo = moment(createdAt).fromNow();

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
          {this.renderReply()}
          LOL
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(CommentItem);
