import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import App from './components/App.jsx';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>
  , document.getElementById('app'));
