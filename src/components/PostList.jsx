import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showThread } from '../actions/index';

const PostList = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    posts: React.PropTypes.object,
    showThread: React.PropTypes.func
  },
  componentWillMount () {
    console.log('Inside componentWillMount in PostList component');
    console.log('this.props is:');
    console.log(this.props);
  },
  renderPosts () {
    if (!this.props.posts) {
      return (
        <div>
          Posts!
        </div>
      );
    } else {
      return this.props.posts.map((post) => (
        <div key={post.p_id} onClick={() => this.props.showThread(post)}>
          <PostItem {...post} />
        </div>
      ));
    }
  },
  render () {
    console.log('Inside render() in PostList component');
    console.log('this.props is:');
    console.log(this.props);

    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    posts: state.brewContent.posts
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ showThread: showThread }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
