import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import BrewContent from './components/BrewContent';
import UserDetail from './components/UserDetail';
import SignIn from './components/auth/SignIn';
import Thread from './components/Thread';

const createRoutes = (props) => (
  <Route path='/' component={App} >
    <Route path='/b/:b' component={BrewContent} />
    <Route path='/u/:u' component={UserDetail} />
    <Route path='/signin' component={SignIn} />
    <Route path='/thread/:postId' component={Thread} />
  </Route>
);

export default createRoutes;
