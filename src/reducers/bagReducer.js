import { LOAD_BAG, 
    LOAD_BAG_FAILURE, 
    LOAD_BAG_STARTED, 
    LOAD_BAG_SUCCESS } from '../actions/bagActions';

const INITIAL_STATE = {
    loading: false,
    response: null,
    data: null
 };

export default function bagReducer(state = INITIAL_STATE, action) {
    console.log(`Bag Reducer: type: ${action.type} || payload: ${action.payload}`)
switch (action.type) {
    case LOAD_BAG:
        return {
            ...state
        };
    case LOAD_BAG_FAILURE:
        return {
            ...state,
            loading: false,
        };
    case LOAD_BAG_STARTED:
        return {
            ...state,
            loading: true
        };
    case LOAD_BAG_SUCCESS:
        return {
            ...state,
            loading: false,
            ...action.payload
        };
    default:
        return state;
}
}