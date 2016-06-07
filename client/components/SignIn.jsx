import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';

const { string, object, func } = React.PropTypes;

const SignIn = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    userSignIn: func,
    errorMessage: string
  },
  handleFormSubmit ({ username, password }) {
    this.props.userSignIn({ username, password });
  },
  renderErrorMessage () {
    if (this.props.errorMessage) {
      return (
        <div className='ui attached fluid negative message'>
          {this.props.errorMessage}
        </div>
      );
    }
  },
  render () {
    const { handleSubmit, fields: { username, password } } = this.props;

    return (
      <div className='ui container'>
        <div className='ui attached message'>
          <div className='header'>
            Welcome back!
          </div>
          <p>Sign in with the form below.</p>
        </div>
        <form className='ui form attached fluid segment' onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className='required field six wide'>
            <label>Username:</label>
            <input type='text' {...username} />
          </div>
          <div className='required field six wide'>
            <label>Password:</label>
            <input type='password' {...password} />
          </div>
          <button className='ui button positive' type='submit'>Sign In</button>
        </form>
        {this.renderErrorMessage()}
        <div className='ui bottom attached warning message'>
          Don't have an account? <Link to='signup'><strong>Sign up here</strong></Link> instead.
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return { errorMessage: state.auth.errorMessage };
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, actions)(SignIn);
