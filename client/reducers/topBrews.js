import { RECEIVED_TOP_BREWS } from '../constants';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVED_TOP_BREWS:
      return action.payload;
  }

  return state;
}
