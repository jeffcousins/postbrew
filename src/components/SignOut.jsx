import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SignOut = React.createClass({
  render () {
    return (
      <div className='ui center aligned segment'>
        <h3>Signing you out. Thank you for visiting!</h3>
        <img className='ui centered large image' src='http://i.giphy.com/dOPBU0xokGChq.gif' />
      </div>
    );
  }
});

export default connect(null, actions)(SignOut);
