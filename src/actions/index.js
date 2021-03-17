// importamos las constantes creadas
// action creators son las que depachan las actions

import { GET_MOVIES, GET_MOVIE_DETAILS, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from './actionTypes'

export const getMovies = (titulo) => {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export const getMovieDetails = (id) => {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id + "&plot=full")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIE_DETAILS, payload: json });
      });
  };
}

export const addMovieFavorite = (payload) => {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload
  }
}

export const removeMovieFavorite = (payload) => {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload
  }
}