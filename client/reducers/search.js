const reduceSearchTerm = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchQuery: action.value});
  return newState;
};

export default reduceSearchTerm;
