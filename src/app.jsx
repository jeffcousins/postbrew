import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Content from './components/Content';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/content' component={Content} />
    </Route>
  </Router>
  , document.getElementById('app'));
