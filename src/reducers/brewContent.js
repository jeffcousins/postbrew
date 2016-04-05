const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  console.log('action received', action);
  console.log('action.type ===', action.type);

  if (action.type === 'RECEIVED') {
    const newState = {};
    Object.assign(newState, state, action.payload);
    console.log('about to return real newState:');
    console.log(newState);
    return newState;
  }

  if (action.type === '@@router/LOCATION_CHANGE') {
    const newState = {};
    Object.assign(newState, state, action.payload);
    return newState;
  }

  return state;
}
