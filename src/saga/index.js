import { takeEvery } from 'redux-saga/effects';
import { getMovies } from './movies';
import { getMovie } from './movie';


export default function* rootSaga() {
    yield [
        yield takeEvery('GET__MOVIES__REQUESTED', getMovies),
        yield takeEvery('GET__MOVIE__REQUESTED', getMovie),
    ];
}
