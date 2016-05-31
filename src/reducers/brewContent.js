import { BREW_NOT_FOUND } from '../constants';

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

    case 'RECEIVED_ALL':
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

    case '@@router/LOCATION_CHANGE':
      let rootState = {};
      if (action.payload.pathname === '/') {
        rootState = {
          UserId: '',
          brew_name: '',
          description: 'All posts.',
          id: '',
          pathname: '/',
          title: '[ postbrew ]',
          username: '',
          createdAt: '',
          updatedAt: ''
        };
      }

      Object.assign(newState,
        state,
        rootState,
        { notFound: false },
        action.payload);
      return newState;
  }

  return state;
}
