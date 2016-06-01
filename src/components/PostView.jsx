import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
    const { title } = this.props.postContent;
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
          <h2>{this.props.postContent.title}</h2>
        </div>
      );
    }
  },
  renderTextContent () {
    const { content } = this.props.postContent;
    if (content) {
      return (
        <div className='ui padded segment' style={textContent}>
          <p>{content}</p>
        </div>
      );
    }
  },
  renderCommentButton () {
    if (this.props.isSignedIn) {
      return (
        <div className='mini ui compact green button'>
          + Comment
        </div>
      );
    } else {
      return (
        <div className='mini ui compact button'>
          Sign in to comment
        </div>
      );
    }
  },
  render () {
    return (
      <div>
        {this.renderTitle()}
        {this.renderTextContent()}
        {this.renderCommentButton()}
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
