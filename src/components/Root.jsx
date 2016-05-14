import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createRoutes from '../routes';
import configStore from '../store/configStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { IS_SIGNED_IN } from '../constants';

// prevent server from trying to load CSS
if (process.env.BROWSER) {
  require('semantic-ui-css/semantic.min.css');
  require('semantic-ui-css/semantic.min.js');
}

const store = configStore();

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: IS_SIGNED_IN });
}

const history = syncHistoryWithStore(browserHistory, store);

const Root = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          {createRoutes()}
        </Router>
      </Provider>
    );
  }
});

export default Root;
