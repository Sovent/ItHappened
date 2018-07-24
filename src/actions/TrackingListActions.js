import { 
    FETCH_TRACKINGS, CREATE_TRACKING_PROPERTY_CHANGED 
} from './types';
import TrackingRepository from '../persistence/TrackingRepository';

export const fetchTrackings = () => {
    return async (dispatch) => {
        const trackingRepository = new TrackingRepository();
        const trackings = await trackingRepository.getTrackings();
        dispatch({
            type: FETCH_TRACKINGS,
            payload: trackings
        });
    };
};

export const updateCreateTrackingForm = (update) => {
    return {
        type: CREATE_TRACKING_PROPERTY_CHANGED,
        payload: update
    };
};

export const createTracking = (tracking) => {
    return async (dispatch) => {
        const trackingRepository = new TrackingRepository();
        await trackingRepository.addTracking(tracking);
        dispatch(
            {
                type: CREATE_TRACKING_PROPERTY_CHANGED,
                payload: {
                    trackingName: '',
                    mandatoryCustomizations: [],
                    optionalCustomizations: [],
                    metricMeasurement: null
                }
            }
        );
    };
};

