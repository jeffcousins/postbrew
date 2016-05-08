import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';

const { object, func } = React.PropTypes;

const SignUp = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func
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
        <form className='ui form attached fluid segment'>
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
          </div>
          <button className='ui button positive' type='submit'>Sign Up</button>
        </form>
        {/* {this.renderErrorMessage()} */}
        <div className='ui bottom attached warning message'>
          Already have an account? <Link to='/signin'><strong>Sign in here</strong></Link> instead.
        </div>
      </div>
    );
  }
});

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'email', 'username', 'password', 'passwordMatch']
}, null, actions)(SignUp);
