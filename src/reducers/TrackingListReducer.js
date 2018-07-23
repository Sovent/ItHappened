import { 
    FETCH_TRACKINGS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRACKINGS:
            return action.payload;
        default:
            return state;
    }
};
