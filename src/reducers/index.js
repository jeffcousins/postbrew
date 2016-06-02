import { combineReducers } from 'redux';
import brewContent from './brewContent';
import postContent from './postContent';
import topBrews from './topBrews';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from './auth';

const rootReducer = combineReducers({
  brewContent,
  postContent,
  topBrews,
  form,
  auth,
  routing: routerReducer
});

export default rootReducer;
