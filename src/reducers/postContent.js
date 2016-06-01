const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  const newState = {};

  switch (action.type) {
    case 'POST_RECEIVED':
      Object.assign(newState,
        state,
        action.payload.post
      );
      return newState;
  }

  return state;
}
