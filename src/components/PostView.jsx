import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const { object, func, bool } = React.PropTypes;

const smallGrayStyle = {
  'fontSize': '11',
  'color': 'gray'
};

const textContent = {
  'background': '#f8f8f8'
};

const PostView = React.createClass({
  propTypes: {
    postContent: object,
    brewContent: object,
    params: object,
    fetchPostContent: func,
    isSignedIn: bool
  },
  componentDidMount () {
    const { b, post } = this.props.params;

    if (!this.props.postContent.title) {
      this.props.fetchPostContent(b, post);
    }
  },
  renderTitle () {
    if (!this.props.postContent.post) {
      return;
    }

    const { title } = this.props.postContent.post;
    let url = this.props.postContent.url;

    if (url) {
      if (url.length > 30) {
        url = url.slice(0, 30) + '...';
      }

      return (
        <div>
          <h2><a href={`${url}`}>{title}</a><br /><span>
            <a href={`${url}`} style={smallGrayStyle}>[ {url} ]</a></span>
          </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{title}</h2>
        </div>
      );
    }
  },
  renderTextContent () {
    if (!this.props.postContent.post) {
      return;
    }

    const { content } = this.props.postContent.post;
    if (content) {
      return (
        <div className='ui padded segment' style={textContent}>
          <p>{content}</p>
        </div>
      );
    }
  },
  renderCommentBox () {
    const { b, post } = this.props.params;

    if (this.props.isSignedIn) {
      return (
        <CommentBox postId={Number(post)} parentId={-1} />
      );
    } else {
      return (
        <Link to={`/signin`}>
          <button className='mini ui compact button'>
            Sign in to comment
          </button>
        </Link>
      );
    }
  },
  render () {
    return (
      <div>
        {this.renderTitle()}
        {this.renderTextContent()}
        {this.renderCommentBox()}
        <CommentList comments={this.props.postContent.comments} />
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    postContent: state.postContent,
    brewContent: state.brewContent,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, actions)(PostView);
