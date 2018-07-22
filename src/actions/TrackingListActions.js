import { FETCH_TRACKINGS } from './types';

export const fetchTrackings = ({ uid }) => {
    return {
        type: FETCH_TRACKINGS,
        payload: uid
    };
};
