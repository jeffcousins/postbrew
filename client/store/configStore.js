import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

export default function configStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
    // compose(
    //   typeof window === 'object' && window.devToolsExtension !== 'undefined'
    //     ? window.devToolsExtension() : (f) => f
    // )
  );
}
