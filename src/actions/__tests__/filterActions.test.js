import {searchByAction} from '../searchBy'
import {sortByAction} from '../sortBy'

describe('actions', () => {
    it('should create search by action', () => {
        const action = 'SEARCH__ACTION';
        const expectedAction = {
            type: 'SEARCH__ACTION'
        };
        expect(searchByAction(action)).toEqual(expectedAction)
    });
    it('should create sort by action', () => {
        const action = 'SORT__ACTION';
        const expectedAction = {
            type: 'SORT__ACTION'
        };
        expect(searchByAction(action)).toEqual(expectedAction)
    });
});