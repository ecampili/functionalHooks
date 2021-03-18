import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../../actions/index';

import './Movie.css';

const Movie = (props) => {

  const movie = useSelector(state => state.movieDetail);
  const dispatch = useDispatch();
  const movieId = props.match.params.id;

  useEffect(() => {
    dispatch(getMovieDetails(movieId))
  }, [movieId, dispatch]);

  return (
    <div className="container">
      <div className="movie-detail">
        <h2>{movie.Title}</h2>
       
        
        <div className="data">
          <div className="poster">
        <img src={movie.Poster} alt={movie.Title}></img>
        </div>
        <div className="details">
          <div> <span>Year:</span> {movie.Year}</div>
          <div> <span>Director:</span> {movie.Director}</div>
          <div> <span>Genre:</span> {movie.Genre}</div>
          <div> <span>Cast:</span> {movie.Actors}</div>
          <div> <span>Language:</span> {movie.Language}</div>
          <div> <span>Country:</span> {movie.Country}</div>
          <div> <span>Rating:</span> {movie.imdbRating}</div>
          <p>{movie.Plot}</p>

        </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;








