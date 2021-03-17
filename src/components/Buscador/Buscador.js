import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions/index';



const Buscador = () => {

  const movies = useSelector((state) => state.moviesLoaded);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMovies(title));
  }


  return (
    <div className="container-main">
      <div className="titulo">
        <h1>Realizado con React Functional Components - ES6- Hooks </h1>
      </div>

      <h2>Buscador</h2>      
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="label" htmlFor="title">Película: </label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">BUSCAR</button>
      </form>
      <div className="container-list">
        {
          movies && movies.map((movie) =>
          (
            <div className="peli" key={movie.imdbID}>
              <NavLink to={`/movie/${movie.imdbID}`} > {movie.Title} </NavLink>
              <button onClick={() => dispatch(addMovieFavorite({ id: movie.imdbID, title: movie.Title }))}>Favoritos</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Buscador;







