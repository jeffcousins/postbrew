import { combineReducers } from 'redux';
import showThread from './showThread';
import brewContent from './brewContent';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { auth } from './auth';

const rootReducer = combineReducers({
  brewContent,
  showThread,
  form,
  auth,
  routing: routerReducer
});

export default rootReducer;
