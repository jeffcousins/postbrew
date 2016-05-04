import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';
import $ from 'jquery';

const { string, object, func } = React.PropTypes;

const SignIn = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    userSignIn: func,
    errorMessage: string
  },
  componentDidMount () {
    $('.ui.form')
      .form({
        on: 'blur',
        fields: {
          username: 'empty',
          password: 'empty'
        }
      });
  },
  handleFormSubmit ({ username, password }) {
    this.props.userSignIn({ username, password });
  },
  renderMessage () {
    if (!this.props.errorMessage) {
      return;
    } else {
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
      <div className='ui container compact'>
        <div className='ui attached message'>
          <div className='header'>
            Welcome back!
          </div>
          <p>Sign in with the form below.</p>
        </div>
        <form className='ui form attached fluid segment' onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className='required field six wide'>
            <label>Username:</label>
            <input type='text' name='username' {...username} />
          </div>
          <div className='required field six wide'>
            <label>Password:</label>
            <input type='password' name='password' {...password} />
          </div>
          <button className='ui button positive' action='submit'>Sign In</button>
        </form>
        {this.renderMessage()}
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
