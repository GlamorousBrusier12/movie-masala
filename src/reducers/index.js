import {
  ADD_FAVOURITE,
  ADD_MOVIES,
  REMOVE_FAVOURITE,
  TOGGLE_FAVOURITE,
} from "../actions";
const initialState = {
  list: [],
  favourites: [],
  showFav: false,
};
export default function movies(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      console.log(`${action.movie.Title} added as a favourite:)`);
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITE:
      console.log(`${action.movie.Title} remove added as a favourite:(`);
      const fav = state.favourites.filter((m) => m !== action.movie);
      return {
        ...state,
        favourites: fav,
      };
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        showFav: action.value,
      };
    default:
      return state;
  }
}
