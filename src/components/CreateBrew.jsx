import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
const { object, func, string } = React.PropTypes;

const CreateBrew = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    errorMessage: string
  },
  handleFormSubmit (formProps) {
    console.log(formProps);
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
        brewName, title, description
      }
    } = this.props;

    return (
      <div className='ui container compact'>
        <div className='ui attached message'>
          <div className='header'>
            Create a new Brew
          </div>
          <p>Please fill out the form below.</p>
        </div>
        <form className='ui form attached fluid segment' onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className='required field six wide'>
            <label>Brew Name</label>
            <input type='text' {...brewName} placeholder='lowercasebrew' />
          </div>
          <div className='required field six wide'>
            <label>Title</label>
            <input type='text' {...title} placeholder='A short title.' />
          </div>
          <div className='required field six wide'>
            <label>Description</label>
            <textarea rows='3' {...description}></textarea>
          </div>
          <button className='ui button positive' type='submit'>Create</button>
        </form>
        {this.renderErrorMessage()}
        <div className='ui bottom attached warning message'>
          LOL
        </div>
      </div>
    );
  }
});

function validate (formProps) {
  const errors = {};
  const { brewName, title, description } = formProps;

  if (!brewName) {
    errors.brewName = 'Please enter a brew name.';
  }

  if (!title) {
    errors.title = 'Please enter a short title.';
  }

  if (!description) {
    errors.description = 'Please enter a description for your new brew.';
  }

  return errors;
}

export default reduxForm({
  form: 'createbrew',
  fields: ['brewName', 'title', 'description'],
  validate
})(CreateBrew);
