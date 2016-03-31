import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { store } from '../store/store';
import createRoutes from '../routes';

const Root = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {createRoutes()}
        </Router>
      </Provider>
    );
  }
});

export default Root;
