import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const { object, func } = React.PropTypes;

const SignIn = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    userSignIn: func
  },
  handleFormSubmit ({ username, password }) {
    console.log(username, password);
    this.props.userSignIn({ username, password });
  },
  render () {
    const { handleSubmit, fields: { username, password } } = this.props;

    return (
      <form className='ui form' onSubmit={handleSubmit(this.handleFormSubmit)}>
        <div className='required six wide field'>
          <label>Username:</label>
          <input type='text' {...username} />
        </div>
        <div className='required six wide field'>
          <label>Password:</label>
          <input type='text' {...password} />
        </div>
        <button className='ui button positive' action='submit'>Sign In</button>
      </form>
    );
  }
});

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, null, actions)(SignIn);
