export default function movies(state = {}, action) {
    switch (action.type) {
        case 'GET__MOVIES__REQUESTED':
            return {
                success: false,
                loading: true
            };
        case 'GET__MOVIES__SUCCESS':
            return {
                success: true,
                loading: false,
                data: action.payload
            };
        case 'MOVIES__IS__LOAD':
            return { success: false };
        case 'GET__MOVIES__FAILURE':
            return {
                success: false,
                loading: false
            };
        default:
            return state;
    }
}