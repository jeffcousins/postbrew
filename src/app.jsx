import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Content from './components/Content';
import Thread from './components/Thread';
import { store } from './store/store';

const Reddux = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App} >
            <Route path='/content/:f' component={Content} />
            <Route path='/thread/:id' component={Thread} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

render(<Reddux />, document.getElementById('app'));
