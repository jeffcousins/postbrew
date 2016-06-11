import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';

const { object, array } = React.PropTypes;

const PostList = React.createClass({
  propTypes: {
    params: object,
    posts: array
  },
  renderPosts () {
    if (!this.props.posts) {
      return;
    }

    if (!this.props.posts.length) {
      return;
    }

    let showBrew = true;

    if (this.props.params && this.props.params.b) {
      showBrew = false;
    }

    return this.props.posts.map((post) => {
      return (
        <PostItem key={post.id} data={post} showBrew={showBrew}/>
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
    posts: state.brewContent.posts
  };
}

export default connect(mapStateToProps)(PostList);
