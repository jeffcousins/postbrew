import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../actions';

const { object, func, string, number } = React.PropTypes;

const SubmitPost = React.createClass({
  propTypes: {
    fields: object,
    handleSubmit: func,
    errorMessage: string,
    userId: number,
    brewContent: object,
    submitPost: func
  },
  handleFormSubmit (formProps) {
    formProps.brewName = this.props.brewContent.brew_name;
    formProps.brewId = this.props.brewContent.id;
    formProps.userId = this.props.userId;
    this.props.submitPost(formProps);
  },
  render () {
    const {
      brewContent,
      handleSubmit,
      fields: {
        title,
        url,
        content
      }
    } = this.props;

    const brewUrl = `/b/${brewContent.brew_name}`;

    return (
      <div className='ui container compact'>
        <div className='ui attached message'>
          <div className='header'>
            Submit a post to <Link to={brewUrl}>{brewUrl}</Link>
          </div>
          <p>Ask a question. Post a link. Give advice.</p>
        </div>
        <form className='ui inverted form attached fluid segment'
              onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className='required field eleven wide'>
            <label>Title</label>
            <input type='text' {...title} placeholder='wat' />
          </div>
          <div className='ui divider'></div>
          <div className='field eleven wide'>
            <label>URL (optional)</label>
            <input type='text' {...url}
              placeholder='this.isoptional.com' />
          </div>
          <div className='ui divider'></div>
          <div className='field eleven wide'>
            <label>Text (optional)</label>
            <textarea rows='5' {...content}
              placeholder='This is optional.'>
            </textarea>
          </div>
          <div className='ui divider'></div>
          <button className='ui button positive' type='submit'>Create</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    brewContent: state.brewContent,
    userId: state.auth.userId
  };
}

export default reduxForm({
  form: 'submitpost',
  fields: ['title', 'content', 'url']
}, mapStateToProps, actions)(SubmitPost);
