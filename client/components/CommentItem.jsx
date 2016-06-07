import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

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
    submitComment: func
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
    console.log(this.state);
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
        <textarea
          rows='2'
          value={this.state.text}
          onChange={(event) => this.onInputChange(event.target.value)}/>
        <br />
        <a style={green} onClick={() => this.onSave()}><b>SAVE</b></a>
        <a className='reply' onClick={() => this.openSwitch()}>cancel</a>
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
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    auth: state.auth,
    brewContent: state.brewContent
  };
}

export default connect(mapStateToProps, actions)(CommentItem);
