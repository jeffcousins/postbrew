import { IS_SIGNED_IN, IS_SIGNED_OUT } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case IS_SIGNED_IN:
      return Object.assign(state, { isSignedIn: true });
    case IS_SIGNED_OUT:
      return Object.assign(state, { isSignedIn: false });
  }

  return state;
}
