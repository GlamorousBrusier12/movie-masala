import { Component } from "react";
import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  render() {
    const { result: movies, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              {movies.map((movie, index) => {
                return (
                  <div className="search-result">
                    <img src={movie.Poster} alt="search-pic" />
                    <div className="movie-info">
                      <span>{movie.Title}</span>
                      <button onClick={() => this.handleAddMovies(movie)}>
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
