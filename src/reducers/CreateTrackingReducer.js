import { 
    CREATE_TRACKING_PROPERTY_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    trackingName: '',
    mandatoryCustomizations: [],
    optionalCustomizations: [],
    metricMeasurement: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TRACKING_PROPERTY_CHANGED:
            return { 
                ...state,
                ...action.payload
             };
        default:
            return state;
    }
};
