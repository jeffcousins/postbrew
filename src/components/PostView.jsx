import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { object, func } = React.PropTypes;

const smallGrayStyle = {
  'fontSize': '11',
  'color': 'gray'
};

const PostView = React.createClass({
  propTypes: {
    postContent: object,
    brewContent: object,
    params: object,
    fetchPostContent: func
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
          <h2><a href={`${url}`}>
            {title}</a><br /><span><a href={`${url}`} style={smallGrayStyle}>[ {url} ]</a></span>
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
  render () {
    return (
      <div>
        {this.renderTitle()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    postContent: state.postContent,
    brewContent: state.brewContent
  };
}

export default connect(mapStateToProps, actions)(PostView);
