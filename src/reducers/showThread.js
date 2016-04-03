export default function (state = null, action) {
  switch(action.type) {
    case: 'SHOW_THREAD':
      return action.post;
  }

  return state;
}
