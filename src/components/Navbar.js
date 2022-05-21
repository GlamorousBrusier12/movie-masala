import { Component } from "react";
import { connect } from "react-redux";
import { handleMovieSearch, searchMovie } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddMovies = (movie) => {
    this.props.dispatch(searchMovie(movie.imdbID));
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
    // console.log(this.props);
    const { result: movies, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div style={{ color: "white" }}>
          <h1>Movie-Masala</h1>
        </div>
        <div className="search-container">
          <input onChange={this.handleChange} placeholder="Search" />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              {movies &&
                movies.map((movie, index) => {
                  return (
                    <div className="search-result" key={index}>
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

// class NavbarWrapper extends Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }
function matchStateToProps(state) {
  return {
    search: state.search,
  };
}

const ConnectedNavbarComponent = connect(matchStateToProps)(Navbar);

export default ConnectedNavbarComponent;
