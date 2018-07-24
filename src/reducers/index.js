import { combineReducers } from 'redux';
import TrackingListReducer from './TrackingListReducer';
import CreateTrackingReducer from './CreateTrackingReducer';

export default combineReducers({
    trackings: TrackingListReducer,
    createTrackingForm: CreateTrackingReducer
});
