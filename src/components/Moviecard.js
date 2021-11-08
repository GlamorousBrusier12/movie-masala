import { Component } from "react";
import { addFavourite, removeFavourite } from "../actions";
class Moviecard extends Component {
  addFav = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  removeFav = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite === false ? (
              <button className="favourite-btn" onClick={this.addFav}>
                Favourite
              </button>
            ) : (
              <button className="unfavourite-btn" onClick={this.removeFav}>
                UnFavourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
