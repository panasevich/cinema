import { SEARCH_BY_RATING, SEARCH_BY_DATE } from '../actions/actionTypes';

const initialState = 'rating';

export default function modal(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_RATING:
            return 'rating';
        case SEARCH_BY_DATE:
            return 'date';
        default:
            return state;
    }
}
