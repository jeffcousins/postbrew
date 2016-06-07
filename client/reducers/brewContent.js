import {
  RECEIVED,
  RECEIVED_ALL,
  BREW_NOT_FOUND,
  RESET_BREW
} from '../constants';

const INITIAL_STATE = {
  description: '',
  title: '',
  brew_name: '',
  pathname: '',
  username: ''
};

export default function (state = INITIAL_STATE, action) {
  const newState = {};

  switch (action.type) {
    case RECEIVED:
      Object.assign(newState,
        state,
        action.payload.brew,
        { posts: action.payload.posts }
      );
      return newState;

    case RECEIVED_ALL:
      Object.assign(newState,
        state,
        { posts: action.payload.posts }
      );
      return newState;

    case BREW_NOT_FOUND:
      Object.assign(newState,
        state,
        { notFound: true }
      );
      return newState;

    case RESET_BREW:
      Object.assign(newState, INITIAL_STATE);
      return newState;
  }

  return state;
}
