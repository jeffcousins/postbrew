import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import * as actions from '../actions';

const { number, string, object, func } = React.PropTypes;

const blue = {
  color: '#2185D0'
};

const green = {
  color: '#21BA45'
};

const CommentItem = React.createClass({
  propTypes: {
    id: number,
    BrewId: number,
    PostId: number,
    username: string,
    content: string,
    createdAt: string,
    auth: object,
    brewContent: object,
    postContent: object,
    submitComment: func,
    CommentId: number
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
  onInputChange (text) {
    this.setState({ text });
  },
  onSave () {
    const { BrewId, PostId } = this.props;
    const { userId } = this.props.auth;
    const brewName = this.props.brewContent.brew_name;
    const parentId = this.props.id;
    const { text } = this.state;

    if (!this.state.text.trim()) {
      return;
    }

    this.props.submitComment(userId, BrewId, PostId, parentId, text, brewName);
    this.openSwitch();
    this.setState({text: ''});
  },
  renderReply () {
    const fieldStyle = {
      marginBottom: 5
    };

    if (!this.props.auth.isSignedIn) {
      return;
    }

    if (!this.state.open) {
      return (
        <div className='actions'>
          <a className='reply' onClick={() => this.openSwitch()}>Reply</a>
        </div>
      );
    }

    return (
      <div className='ui form'>
        <div className='field nine wide' style={fieldStyle}>
          <textarea
            rows='2'
            value={this.state.text}
            onChange={(event) => this.onInputChange(event.target.value)}/>
        </div>
        <div className='actions'>
          <a style={green} onClick={() => this.onSave()}><b>SAVE</b></a>
          <a className='reply' onClick={() => this.openSwitch()}>cancel</a>
        </div>
      </div>
    );
  },
  renderChildComments () {
    const parentId = this.props.id;
    const { comments } = this.props.postContent;
    const childComments = comments.filter((comment) => {
      return comment.CommentId === parentId;
    });

    if (childComments.length) {
      return <CommentList comments={childComments} />;
    }
  },
  render () {
    const { username, content, createdAt } = this.props;
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
          {this.renderChildComments()}
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    auth: state.auth,
    brewContent: state.brewContent,
    postContent: state.postContent
  };
}

export default connect(mapStateToProps, actions)(CommentItem);
