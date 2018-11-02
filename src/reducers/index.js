import { combineReducers } from 'redux';
import searchBy from './searchBy';
import sortBy from './sortBy';
import movies from './movies';
import movie from './movie';
import searchByString from './searchByString';


export default combineReducers({
    searchBy,
    sortBy,
    movies,
    searchByString,
    movie,
});
