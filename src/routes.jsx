import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Content from './components/Content';
import Thread from './components/Thread';

const createRoutes = (props) => (
  <Route path='/' component={App} >
    <Route path='/b/:b' component={Content} />
    <Route path='/thread/:id' component={Thread} />
  </Route>
);

export default createRoutes;
