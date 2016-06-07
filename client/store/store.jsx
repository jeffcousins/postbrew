// import { compose, createStore } from 'redux';
// import { connect } from 'react-redux';
// import { forums } from '../../public/data';

// const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
// const initialState = {
//   forums,
//   searchQuery: ''
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_SEARCH_QUERY:
//       return reduceSearchTerm(state, action);
//     default:
//       return state;
//   }
// };

// const reduceSearchTerm = (state, action) => {
//   const newState = {};
//   Object.assign(newState, state, {searchTerm: action.value});
//   return newState;
// };

//  without redux chrome devtools:
// const store = createStore(rootReducer);

// /* with redux chrome devtools: */
// const store = createStore(rootReducer, initialState, compose(
//   typeof window === 'object' && window.devToolsExtension !== 'undefined'
//     ? window.devToolsExtension() : (f) => f
// ));

// const mapStateToProps = (state) => {
//   return {
//     forums: state.forums,
//     searchQuery: state.searchQuery
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSearchQuery (searchQuery) {
//       dispatch({type: SET_SEARCH_QUERY, value: searchQuery});
//     }
//   };
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);

// module.exports = { store, connector };
