import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../../actions/index';

import './Movie.css';

const Movie = (props)=>{

  const movie = useSelector(state => state.movieDetail);
  const dispatch = useDispatch();
  const movieId = props.match.params.id;

  useEffect(() => {
    dispatch(getMovieDetails(movieId))    
  },[movieId,dispatch]);

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <h3> {`Director: ${movie.Director}`}</h3>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title}></img>
    </div>
  );
}
export default Movie;








