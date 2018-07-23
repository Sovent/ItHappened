import { FETCH_TRACKINGS } from './types';
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
