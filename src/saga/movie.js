import { call, put } from 'redux-saga/effects';
import { getApiCall } from './apiCall';

export function* getMovie(data) {
    const { url, params } = data.payload;
    try {
        const result = yield call(getApiCall, url, params);
        yield put({ type: 'GET__MOVIE__SUCCESS', payload: result });
    } catch (error) {
        yield put({ type: 'GET__MOVIE__FAILURE' });
    }
}
