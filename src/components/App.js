import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovies, toggleFavourite } from "../actions";
import { data } from "../data";
import Moviecard from "./Moviecard";
import Navbar from "./Navbar";
class App extends Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   // never use this foreupate method
    //   this.forceUpdate();
    // });
    //make an API call
    // dispatch an action
    this.props.dispatch(addMovies(data));
  }

  isMoviefavourite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    return index !== -1;
  };
  handleFav = (value) => {
    this.props.dispatch(toggleFavourite(value));
  };
  render() {
    const { movies } = this.props;
    const { list, showFav, favourites } = movies;
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
                  dispatch={this.props.dispatch}
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

// class AppWrapper extends Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

const connectAppComponent = connect(mapStateToProps)(App);

export default connectAppComponent;
