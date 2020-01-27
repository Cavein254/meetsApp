import { GET_MEETS } from '../actions/types.js';

const initialState = {
    meets: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEETS:
            return {
                ...state,
                leads: action.payload
            }
        default:
            return state;
    }
}