// importar las constantes creadas
// crear initialState
// crear reducer que recibe como parametro el state = initialState  y action
// dentro del reducer hacer un switchcase para cada una de las acciones
// no olvidar el default que debe devolver el state completo recibido sin ninguna modificacion

import { GET_MOVIES, GET_MOVIE_DETAILS, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from '../actions/actionTypes';

const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOVIES: {            
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        }
        case GET_MOVIE_DETAILS: {
            return {
                ...state,
                movieDetail: action.payload
            }
        }
        case ADD_MOVIE_FAVORITE: 
        const newMovie = state.movies.find(movie => movie.id === action.payload.id);        
        if(!newMovie){
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        }
        return state;          

       
        case REMOVE_MOVIE_FAVORITE: {
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload.id)
            }

        }
        default: return state;
    }

}

export default rootReducer;

