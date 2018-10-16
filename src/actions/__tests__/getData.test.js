import * as actions from '../getData';

describe('actions', () => {
    it('should create action for fetch movies data', () => {
        const type = 'GET__MOVIES__REQUESTED';
        const string = 'alex';
        const payload = {url: 'movies', params: string};
        const expectedAction = {
            type: type,
            payload: payload
        };
        expect(actions.getData(string)).toEqual(expectedAction)
    });
    it('should create action for stop fetch movies data', () => {
        const type = 'MOVIES__IS__LOAD';
        const expectedAction = {
            type: type,
        };
        expect(actions.stopFetch()).toEqual(expectedAction)
    });
    it('should create action for fetch one film data', () => {
        const type = 'GET__MOVIE__REQUESTED';
        const string = 'alex';
        const payload = {url: 'movies/', params: string};
        const expectedAction = {
            type: type,
            payload: payload
        };
        expect(actions.movie(string)).toEqual(expectedAction)
    });

});