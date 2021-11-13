import { combineReducers } from "redux";
import {
  ADD_FAVOURITE,
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
  REMOVE_FAVOURITE,
  TOGGLE_FAVOURITE,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],
  showFav: false,
};
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_MOVIE_TO_LIST: {
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    }
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
  result: [],
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movies,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST: {
      return {
        ...state,
        showSearchResults: false,
      };
    }
    default:
      break;
  }
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

// this reducer calls all the other reducers for each and every action
export default combineReducers({
  movies,
  search,
});
