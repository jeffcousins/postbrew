import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import BrewContent from './components/BrewContent';
import Thread from './components/Thread';

const createRoutes = (props) => (
  <Route path='/' component={App} >
    <Route path='/b/:b' component={BrewContent} />
    <Route path='/thread/:postId' component={Thread} />
  </Route>
);

export default createRoutes;
