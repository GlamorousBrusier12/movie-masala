import React, { Component } from "react";
import { addMovies, toggleFavourite } from "../actions";
import { data } from "../data";
import Moviecard from "./Moviecard";
import Navbar from "./Navbar";
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // never use this foreupate method
      this.forceUpdate();
    });
    //make an API call
    // dispatch an action
    store.dispatch(addMovies(data));
  }

  isMoviefavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    return index !== -1;
  };
  handleFav = (value) => {
    this.props.store.dispatch(toggleFavourite(value));
  };
  render() {
    console.log("Current State :", this.props.store.getState());
    const { movies } = this.props.store.getState();
    const { list, showFav, favourites } = movies;
    // console.log("State", this.props.store.getState());
    const displayMovies = showFav ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFav ? "" : "active-tabs"} `}
              onClick={() => this.handleFav(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFav ? "active-tabs" : ""} `}
              onClick={() => this.handleFav(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <Moviecard
                  movie={movie}
                  key={`movie-${index}`}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMoviefavourite(movie)}
                />
              );
            })}
            {displayMovies.length === 0 ? (
              <div className="no-movies">No Movies to display</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
