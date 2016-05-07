import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import BrewContent from './components/BrewContent';
import UserDetail from './components/UserDetail';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Thread from './components/Thread';

const createRoutes = (props) => (
  <Route path='/' component={App} >
    <Route path='/b/:b' component={BrewContent} />
    <Route path='/u/:u' component={UserDetail} />
    <Route path='/signup' component={SignUp} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signout' component={SignOut} />
    <Route path='/thread/:postId' component={Thread} />
  </Route>
);

export default createRoutes;
