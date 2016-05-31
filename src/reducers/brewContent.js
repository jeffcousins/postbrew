const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  const newState = {};

  switch (action.type) {
    case 'RECEIVED':
      Object.assign(newState,
        state,
        action.payload.brew,
        { posts: action.payload.posts }
      );
      return newState;

    case '@@router/LOCATION_CHANGE':
      Object.assign(newState, state, action.payload);
      return newState;
  }

  return state;
}
