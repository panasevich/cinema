import expect from 'expect';
import reducer from '../movie';
import * as actions from '../../actions/actionTypes';
import { getMovieMock } from '../mocks/getMovieMock';

describe('post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({});
    });

    it('should handle GET__MOVIE__REQUESTED', () => {
        const startAction = {
            type: actions.GET__MOVIE__REQUESTED,
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({}, startAction)).toEqual({ loading: true, success: false });
    });

    it('should handle GET__MOVIE__SUCCESS', () => {
        const successAction = {
            type: 'GET__MOVIE__REQUESTED',
        };
        expect(reducer({ data: 'asd' }, successAction)).toEqual({ data: getMovieMock.data, success: true, loading: false });
    });

    // it('should handle UPDATE_POST_SUCCESS', () => {
    //     const updateAction = {
    //         type: UPDATE_POST_SUCCESS,
    //         post: getPostMock.data,
    //     };
    //     expect(reducer({}, updateAction)).toEqual(getPostMock.data);
    // });
    //
    // it('should handle GET_POST_FAIL', () => {
    //     const failAction = {
    //         type: actions.GET_POST_FAIL,
    //         error: { success: false },
    //     };
    //     expect(reducer({}, failAction)).toEqual({ error: { success: false } });
    // });
});