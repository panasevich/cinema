
export default function modal(state = null, action) {
    switch (action.type) {
        case 'SEARCH__BY__STRING':
            return  action.payload;
        default:
            return state
    }
}