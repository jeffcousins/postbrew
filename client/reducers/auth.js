import {
  IS_SIGNED_IN,
  IS_SIGNED_OUT,
  SIGN_IN_ERROR,
  LOCATION_CHANGE
} from '../constants';

export default function (state = { errorMessage: '', isSignedIn: false }, action) {
  const newState = {};

  switch (action.type) {
    case IS_SIGNED_IN:
      Object.assign(newState, state, {
        errorMessage: '',
        isSignedIn: true,
        userId: Number(action.payload.userId),
        username: action.payload.username
      });
      return newState;

    case IS_SIGNED_OUT:
      Object.assign(newState, state, { isSignedIn: false });
      return newState;

    case SIGN_IN_ERROR:
      Object.assign(newState, state, { errorMessage: action.payload });
      return newState;

    case LOCATION_CHANGE:
      Object.assign(newState, state, { errorMessage: '' });
      return newState;
  }

  return state;
}
