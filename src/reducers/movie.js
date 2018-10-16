export default function movies(state = {}, action) {
    switch (action.type) {
        case 'GET__MOVIE__REQUESTED':
            return {
                success: false,
                loading: true
            };
        case 'GET__MOVIE__SUCCESS':
            return {
                success: true,
                loading: false,
                data: action.payload
            }
        case 'GET__MOVIE__FAILURE':
            return {
                success: false,
                loading: false
            }
        default:
            return state;
    }
}