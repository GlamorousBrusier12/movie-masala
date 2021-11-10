import { combineReducers } from "redux";
import {
  ADD_FAVOURITE,
  ADD_MOVIES,
  REMOVE_FAVOURITE,
  TOGGLE_FAVOURITE,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],
  showFav: false,
};
export function movies(state = initialMoviesState, action) {
  console.log("movies reducer\n");
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

const initialSearchState = {
  result: {},
};

export function search(state = initialSearchState, action) {
  console.log("search reducer\n");
  return state;
}

// const initialRootState = {
//   movies: initialMoviesState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
