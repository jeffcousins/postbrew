import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { string, number, func, object } = React.PropTypes;

const saveButtonStyle = {
  marginTop: '4',
  marginBottom: '8'
};

const CommentBox = React.createClass({
  propTypes: {
    b: string,
    submitComment: func,
    UserId: number,
    BrewId: number,
    id: number,
    parentId: number,
    params: object
  },
  getInitialState () {
    return {
      text: ''
    };
  },
  handleSubmit (event) {
    event.preventDefault();
    const { submitComment, UserId, BrewId, id, parentId, b } = this.props;

    // id is PostId.
    // parentId will be null since it's a root comment
    submitComment(UserId, BrewId, id, parentId, this.state.text, b);
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
          <button style={saveButtonStyle} className='mini ui compact button'>Save</button>
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
