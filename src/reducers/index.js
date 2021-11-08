import { ADD_MOVIES } from "../actions";
const initialState = {
  list: [],
  favourites: [],
};
export default function movies(state = initialState, action) {
  if (action.type === ADD_MOVIES) {
    console.log("dispatched the movies list");
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
