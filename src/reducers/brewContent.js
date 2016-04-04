const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  console.log('action received', action);
  console.log('action.type ===', action.type);

  if (action.type === 'FETCH_BREW_CONTENT') {
    const newState = {};
    Object.assign(newState, state, action.payload.data);
    console.log('about to return newState promise:');
    console.log(newState);
    return newState;
  }

  if (action.type === 'RECEIVED') {
    const newState = {};
    Object.assign(newState, state, action.payload);
    console.log('about to return real newState:');
    console.log(newState);
    return newState;
  }

  return state;
}
