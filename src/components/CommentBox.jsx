import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { string, number, func } = React.PropTypes;

const CommentBox = React.createClass({
  propTypes: {
    b: string,
    postId: number,
    parentId: number,
    submitComment: func
  },
  getInitialState () {
    return {
      text: ''
    };
  },
  handleSubmit (event) {
    event.preventDefault();
    console.log(this.props);
    const { b, postId, parentId, submitComment } = this.props;

    submitComment(b, postId, this.state.text, parentId);
  },
  onInputChange (text) {
    this.setState({ text });
  },
  render () {
    return (
      <form className='ui form' onSubmit={this.handleSubmit}>
        <div className='required field eight wide'>
          <textarea
            rows='3'
            value={this.state.text}
            onChange={(event) => this.onInputChange(event.target.value)}/>
          <button className='mini ui compact button'>Save</button>
        </div>
      </form>
    );
  }
});

export default connect(null, actions)(CommentBox);
