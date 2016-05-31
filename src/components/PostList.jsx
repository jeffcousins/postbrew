import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showThread } from '../actions/index';

const PostList = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    posts: React.PropTypes.array,
    showThread: React.PropTypes.func
  },
  renderPosts () {
    if (!this.props.posts) {
      return;
    }

    if (!this.props.posts.length) {
      return;
    }

    return this.props.posts.map((post) => (
      <PostItem key={post.id} data={post} pathname={this.props.pathname}/>
    ));
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
