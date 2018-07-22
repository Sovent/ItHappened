import { 
    FETCH_TRACKINGS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRACKINGS:
            return {
                fakeid1: {
                    name: 'Fake 1',
                    color: '#32f4a2'
                },
                fakeid2: {
                    name: 'Fake 2',
                    color: '#a234ca'
                }
            };
        default:
            return state;
    }
};
