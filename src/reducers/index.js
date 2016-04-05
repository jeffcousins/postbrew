import { combineReducers } from 'redux';
import showThread from './showThread';
import brewContent from './brewContent';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  brewContent,
  showThread,
  routing: routerReducer
});

export default rootReducer;
