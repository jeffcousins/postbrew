import { combineReducers } from 'redux';
import posts from './posts';
import showPost from './showPost';

const rootReducer = combineReducers({
  posts,
  showPost
});

export default rootReducer;
