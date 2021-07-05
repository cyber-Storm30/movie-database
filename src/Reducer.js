export const initialState = {
  movielist: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movielist: [...state.movielist, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
