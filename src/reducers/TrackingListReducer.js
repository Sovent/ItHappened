import { 
    FETCH_TRACKINGS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRACKINGS:
            for (const { id, name } of action.payload) {
                console.log({ id, name });
            }
            return action.payload;
        default:
            return state;
    }
};
