import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createRoutes from '../routes';
import configStore from '../store/configStore';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configStore();
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
