import { combineReducers } from 'redux';
import brewContent from './brewContent';
import postContent from './postContent';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from './auth';

const rootReducer = combineReducers({
  brewContent,
  postContent,
  form,
  auth,
  routing: routerReducer
});

export default rootReducer;
