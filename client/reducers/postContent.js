const INITIAL_STATE = {};
import { POST_RECEIVED } from '../constants';

export default function (state = INITIAL_STATE, action) {
  const newState = {};

  switch (action.type) {
    case POST_RECEIVED:
      Object.assign(newState,
        state,
        action.payload
      );
      return newState;
  }

  return state;
}
