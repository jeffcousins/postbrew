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
    const { submitComment, userId, postId, parentId } = this.props;
    const brewId = this.props.brewContent.id;

    submitComment(userId, brewId, postId, parentId, this.state.text);
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

function mapStateToProps (state) {
  return {
    brewContent: state.brewContent,
    userId: state.auth.userId
  };
}

export default connect(mapStateToProps, actions)(CommentBox);
