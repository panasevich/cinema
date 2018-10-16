import {searchByStringAction} from '../searchByString'

describe('actions', () => {
    it('should create search by string action', () => {
        const type = 'SEARCH__BY__STRING';
        const string = 'Quentin';
        const expectedAction = {
            type: type,
            payload: string
        };
        expect(searchByStringAction(string)).toEqual(expectedAction)
    });

});