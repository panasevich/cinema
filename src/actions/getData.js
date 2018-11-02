export const getData = data => ({ type: 'GET__MOVIES__REQUESTED', payload: { url: 'movies', params: data } });
export const stopFetch = () => ({ type: 'MOVIES__IS__LOAD' });
export const movie = data => ({ type: 'GET__MOVIE__REQUESTED', payload: { url: 'movies/', params: data } });
