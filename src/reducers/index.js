import { combineReducers } from 'redux';
import showThread from './showThread';
import brewContent from './brewContent';

const rootReducer = combineReducers({
  brewContent,
  showThread
});

export default rootReducer;
