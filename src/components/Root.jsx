import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from '../components/App';
import Content from '../components/Content';
import Thread from '../components/Thread';
import { store } from '../store/store';

const Root = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App} >
            <Route path='/b/:b' component={Content} />
            <Route path='/thread/:id' component={Thread} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

export default Root;
