import { 
    CREATE_TRACKING_PROPERTY_CHANGED, TRACKING_CREATED
} from '../actions/types';
import { CustomizationTypes, CustomizationStatus } from '../persistence/DTO';

const getInitialCustomizations = () => {
    const customizations = {};
    for (const customization of CustomizationTypes) {
        customizations[customization] = CustomizationStatus.DISABLED;
    }
    return customizations;
};

const INITIAL_STATE = {
    trackingName: '',
    trackingColor: '#85CEFF',
    customizations: getInitialCustomizations(),
    metricMeasurement: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TRACKING_PROPERTY_CHANGED:
            return { 
                ...state,
                ...action.payload
             };
        case TRACKING_CREATED:
             return INITIAL_STATE;
        default:
            return state;
    }
};
