import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { object, func } = React.PropTypes;

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
  render () {
    return (
      <div>
        <h2>{this.props.postContent.title}</h2>
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
