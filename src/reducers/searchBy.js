const initialState = 'title';

export default function modal(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_BY_TITLE':
            return  'title';
        case 'SEARCH_BY_DIRECTOR':
            return 'director';
        default:
            return state
    }
}