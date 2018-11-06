import {
    GET__MOVIES__REQUESTED,
    MOVIES__IS__LOAD,
    GET__MOVIE__REQUESTED,
} from './actionTypes';

export const getData = data => ({ type: GET__MOVIES__REQUESTED, payload: { url: 'movies', params: data } });
export const stopFetch = () => ({ type: MOVIES__IS__LOAD });
export const movie = data => ({ type: GET__MOVIE__REQUESTED, payload: { url: 'movies/', params: data } });
