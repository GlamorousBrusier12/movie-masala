export default function movies(state = [], action) {
  if (action.type === "ADD_MOVIES") {
    console.log("dispatched the movies list");
    return action.movies;
  }
  return state;
}
