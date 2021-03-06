// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}
export function toggleFavourite(value) {
  return {
    type: TOGGLE_FAVOURITE,
    value,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function searchMovie(imdbId) {
  // movies with full plot
  // const url = `https://www.omdbapi.com/?apikey=3ca5df7&i=${imdbId}&plot=full`;
  const url = `https://www.omdbapi.com/?apikey=3ca5df7&i=${imdbId}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        // console.log(movie);

        // dispatch an action addMovieToList
        dispatch(addMovieToList(movie));
      });
  };
}

export function addSearchResult(movies) {
  return {
    type: ADD_SEARCH_RESULT,
    movies,
  };
}
export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?apikey=3ca5df7&s=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then(({ Search: movies }) => {
        console.log(movies);

        // dispatch an action addSearchResult
        dispatch(addSearchResult(movies));
      });
  };
}
