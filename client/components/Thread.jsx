import React from 'react';
import { connect } from 'react-redux';

const Thread = React.createClass({
  propTypes: {
    post: React.PropTypes.objectOf(React.PropTypes.string)
  },
  render () {
    if (!this.props.post) {
      return <div>y u no select thread?</div>;
    }

    return (
      <div>
        <h2 style='color: blue'>{this.props.post.title}</h2>
        <h3>{this.props.post.author}</h3>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    post: state.activePost
  };
}

export default connect(mapStateToProps)(Thread);
