import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import App from './components/App.jsx';
import Content from './components/Content';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/content' component={Content} />
  </Router>
  , document.getElementById('app'));
