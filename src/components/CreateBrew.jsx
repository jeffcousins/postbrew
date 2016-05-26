import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
const { object, func, string, number } = React.PropTypes;

const CreateBrew = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    createBrew: func,
    errorMessage: string,
    userId: number
  },
  handleFormSubmit (formProps) {
    formProps.userId = this.props.userId;
    this.props.createBrew(formProps);
  },
  renderErrorMessage () {
    if (this.props.errorMessage) {
      return (
        <div className='ui bottom attached negative message'>
          {this.props.errorMessage}
        </div>
      );
    }
  },
  displayError (field) {
    const { error } = field;
    let color = '';

    if (error) {
      if (field.touched) {
        color = 'red basic';
      }

      return (
        <div className={`ui pointing ${color} label`}>
          {error}
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
        <form className='ui form attached fluid segment'
              onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className='required field seven wide'>
            <label>Brew Name</label>
            <input type='text' {...brewName} placeholder='hogwarts' />
            {this.displayError(brewName)}
          </div>
          <div className='ui divider'></div>
          <div className='required field seven wide'>
            <label>Title</label>
            <input type='text' {...title}
                   placeholder='Witchcraft and wizardry.' />
            {this.displayError(title)}
          </div>
          <div className='ui divider'></div>
          <div className='required field seven wide'>
            <label>Description</label>
            <textarea rows='3' className='four wide' {...description}>
            </textarea>
            {this.displayError(description)}
          </div>
          <button className='ui button positive' type='submit'>Create</button>
        </form>
        {this.renderErrorMessage()}
      </div>
    );
  }
});

function validate (formProps) {
  const errors = {};
  const { brewName, title, description } = formProps;
  const alnum = /^[a-z0-9]+$/;

  if (!brewName || !alnum.test(brewName) ||
      brewName !== brewName.toLowerCase()) {
    errors.brewName = 'Lowercase alphanumeric characters only. No spaces ' +
      'or special characters.';
  }

  if (!title) {
    errors.title = 'Please enter a short title.';
  }

  if (!description) {
    errors.description = 'Please enter a description for your new brew.';
  }

  return errors;
}

function mapStateToProps (state) {
  return { userId: state.auth.userId, errorMessage: state.auth.errorMessage };
}

export default reduxForm({
  form: 'createbrew',
  fields: ['brewName', 'title', 'description'],
  validate
}, mapStateToProps, actions)(CreateBrew);
