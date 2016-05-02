import { combineReducers } from 'redux';
import showThread from './showThread';
import brewContent from './brewContent';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  brewContent,
  showThread,
  form,
  routing: routerReducer
});

export default rootReducer;
