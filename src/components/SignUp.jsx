import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';

const { object, func } = React.PropTypes;

const errStyle = {
  color: 'red'
};

const SignUp = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    userSignUp: func
  },
  handleFormSubmit (formProps) {
    this.props.userSignUp(formProps);
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
    const {
      handleSubmit,
      fields: {
        firstName,
        lastName,
        email,
        username,
        password,
        passwordMatch
      }
    } = this.props;

    return (
      <div className='ui container compact'>
        <div className='ui attached message'>
          <div className='header'>
            Sign Up
          </div>
          <p>Please fill out the form below.</p>
        </div>
        <form className='ui form attached fluid segment' onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className='required field'>
            <label>Name</label>
            <div className='fields'>
              <div className='three wide field'>
                <input type='text' placeholder='First Name' {...firstName} />
              </div>
              <div className='three wide field'>
                <input type='text' placeholder='Last Name' {...lastName} />
              </div>
            </div>
          </div>
          <div className='required field six wide'>
            <label>Email address:</label>
            <input type='email' {...email} placeholder='hgranger@hogwarts.com' />
          </div>
          <div className='required field six wide'>
            <label>Username:</label>
            <input type='text' {...username} />
          </div>
          <div className='required field six wide'>
            <label>Password:</label>
            <input type='password' {...password} />
          </div>
          <div className='required field six wide'>
            <label>Confirm password:</label>
            <input type='password' {...passwordMatch} />
            {passwordMatch.touched && passwordMatch.error && <p style={errStyle}>Passwords must match.</p>}
          </div>
          <button className='ui button positive' type='submit'>Sign Up</button>
        </form>
        {this.renderErrorMessage()}
        <div className='ui bottom attached warning message'>
          Already have an account? <Link to='/signin'><strong>Sign in here</strong></Link> instead.
        </div>
      </div>
    );
  }
});

function validate (formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordMatch) {
    errors.passwordMatch = 'Passwords must match.';
  }

  return errors;
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.errorMessage };
}

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'email', 'username', 'password', 'passwordMatch'],
  validate
}, mapStateToProps, actions)(SignUp);
