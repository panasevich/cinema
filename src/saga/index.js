import { getMovies } from './movies';
import { getMovie } from './movie';
import { takeEvery} from 'redux-saga/effects';

export default function* rootSaga() {
    yield [
        yield takeEvery('GET__MOVIES__REQUESTED', getMovies),
        yield takeEvery('GET__MOVIE__REQUESTED', getMovie),
    ]
}