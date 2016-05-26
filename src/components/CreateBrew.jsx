import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';

const { object, func, string, number } = React.PropTypes;

const CreateBrew = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    createBrew: func,
    errorMessage: string,
    userId: number
  },
  getInitialState: function () {
    return {brewNameInput: ''};
  },
  handleFormSubmit (formProps) {
    formProps.userId = this.props.userId;
    this.props.createBrew(formProps);
    this.setState({brewNameInput: formProps.brewName});
  },
  renderExistingBrewLink () {
    if (this.props.errorMessage.slice(-17) === 'unique brew name.') {
      return (
        <div>
          <strong>...or visit <Link to={`/b/${this.state.brewNameInput}`}>
            /b/{this.state.brewNameInput}
          </Link></strong>
        </div>
      );
    }
  },
  renderErrorMessage () {
    if (this.props.errorMessage) {
      return (
        <div className='ui bottom attached negative message'>
          {this.props.errorMessage}
          {this.renderExistingBrewLink()}
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
            Create a Brew
          </div>
          <p>A new community for whatever topic you choose.</p>
        </div>
        <form className='ui inverted form attached fluid segment'
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
