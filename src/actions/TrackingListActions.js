import {
    FETCH_TRACKINGS, CREATE_TRACKING_PROPERTY_CHANGED, TRACKING_CREATED, EDIT_TRACKING
} from './types';
import { CustomizationTypes, CustomizationStatus } from '../persistence/DTO';
import TrackingRepository from '../persistence/TrackingRepository';

export const fetchTrackings = () => {
    return async (dispatch) => {
        const trackingRepository = new TrackingRepository();
        const trackings = await trackingRepository.getTrackings();
        trackings.addListener((objects) => {
            dispatch({
                type: FETCH_TRACKINGS,
                payload: objects.snapshot()
            });
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
        const mandatoryCustomizations = CustomizationTypes
            .filter(type => tracking.customizations[type] === CustomizationStatus.MANDATORY);
        const optionalCustomizations = CustomizationTypes
            .filter(type => tracking.customizations[type] === CustomizationStatus.OPTIONAL);
        const trackingToAdd = {
            name: tracking.trackingName,
            color: tracking.trackingColor,
            mandatoryCustomizations,
            optionalCustomizations,
            metricMeasurement: tracking.metricMeasurement
        };

        const trackingRepository = new TrackingRepository();
        await trackingRepository.addTracking(trackingToAdd);
        dispatch({ type: TRACKING_CREATED });
    };
};

export const deleteTracking = (id) => {
    return async () => {
        const trackingRepository = new TrackingRepository();
        await trackingRepository.removeTracking(id);
    };
};

export const editTracking = (tracking) => {
    return {
        type: EDIT_TRACKING,
        payload: tracking
    };
};

