import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createRoutes from '../routes';
/* import { createStore, applyMiddleware } from 'redux'; */
/* import promiseMiddleware from 'redux-promise'; */
/* import rootReducer from '../reducers/index'; */
import configStore from '../store/configStore';

/*
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);
*/

const store = configStore();

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
