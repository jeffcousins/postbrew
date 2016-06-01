import React from 'react';
import { connect } from 'react-redux';

const { object } = React.PropTypes;

const PostView = React.createClass({
  propTypes: {
    postContent: object,
    brewContent: object
  },
  render () {
    return (
      <div>
        PostView Component
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    postContent: state.postContent,
    brewContent: state.brewContent
  }
}

export default connect(mapStateToProps)(PostView);
