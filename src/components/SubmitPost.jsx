import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

const SubmitPost = React.createClass({
  render () {
    return <div>meow meow meow</div>;
  }
});

export default reduxForm({
  form: 'submitpost',
  fields: []
}, null, actions)(SubmitPost);
