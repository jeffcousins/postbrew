import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Content from './components/Content';
import Thread from './components/Thread';
import { forums } from '../public/data';

const Reddux = React.createClass({
  getForumData (nextState, replace) {
    const forum = forums[nextState.params.f] || null;
    console.log('forums:');
    console.log(forums);
    console.log('nextState: (going to need id property to be javascript) if working correctly:');
    console.log(nextState);
    console.log('const forum:');
    console.log(forum);
    if (forum === null) {
      replace('/');
    }

    Object.assign(nextState.params, forum);
    return nextState;
  },

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App} forums={forums}>
          <Route path='/content/:f' component={Content} onEnter={this.getForumData} />
          <Route path='/thread/:id' component={Thread} />
        </Route>
      </Router>
    );
  }
});

render(<Reddux />, document.getElementById('app'));
