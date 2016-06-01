import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showThread } from '../actions/index';

const { object, array, func, string } = React.PropTypes;

const PostList = React.createClass({
  propTypes: {
    params: object,
    posts: array,
    showThread: func,
    pathname: string
  },
  renderPosts () {
    if (!this.props.posts) {
      return;
    }

    if (!this.props.posts.length) {
      return;
    }

    return this.props.posts.map((post) => {
      return (
        <PostItem key={post.id} data={post} pathname={this.props.pathname}/>
      );
    });
  },
  render () {
    return (
      <div className='ui relaxed divided list'>
        {this.renderPosts()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    posts: state.brewContent.posts,
    pathname: state.brewContent.pathname
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ showThread: showThread }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
