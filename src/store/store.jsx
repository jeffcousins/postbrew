import { createStore } from 'redux';
import { connect } from 'react-redux';
import { forums } from '../../public/data';

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const initialState = {
  forums,
  searchQuery: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return reduceSearchTerm(state, action);
    default:
      return state;
  }
};

const reduceSearchTerm = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchTerm: action.value});
  return newState;
};

const store = createStore(rootReducer);

const mapStateToProps = (state) => {
  return {
    forums: state.forums,
    searchQuery: state.searchQuery
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchQuery (searchQuery) {
      dispatch({type: SET_SEARCH_QUERY, value: searchQuery});
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { store, connector };
