import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showThread } from '../actions/index';

const PostList = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    forum: React.PropTypes.object,
    showThread: React.PropTypes.func
  },
  renderPosts () {
    return this.props.forum.posts.map((post) => (
      <div key={post.p_id} onClick={() => this.props.showThread(post)}>
        <PostItem {...post} />
      </div>
    ));
  },
  render () {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ showThread: showThread }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
