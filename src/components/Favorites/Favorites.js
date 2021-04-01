import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { NavLink } from 'react-router-dom';
import './Favorites.css';

const ConnectedList = () => {

  const movies = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="container-main">
      <h2>Películas Favoritas</h2>
      {
        movies && movies.map((movie) => {

          return (
            <div className="peli" key={movie.id}>
              <NavLink to={`/movie/${movie.id}`} > {movie.title} </NavLink>
              <button onClick={() => dispatch(removeMovieFavorite({ title: movie.title, id: movie.id }))}>X</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default ConnectedList;








