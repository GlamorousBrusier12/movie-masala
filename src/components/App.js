import React, { Component } from "react";
import { data } from "../data";
import Moviecard from "./Moviecard";
import Navbar from "./Navbar";
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated the state");
      // never use this foreupate method
      this.forceUpdate();
    });
    //make an API call
    // dispatch an action
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
  }
  render() {
    const movies = this.props.store.getState();
    // console.log("movies:", movies);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <Moviecard movie={movie} key={`movie-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
