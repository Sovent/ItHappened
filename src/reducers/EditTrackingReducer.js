import { EDIT_TRACKING } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TRACKING:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
