import { combineReducers } from 'redux';
import TrackingListReducer from './TrackingListReducer';
import CreateTrackingReducer from './CreateTrackingReducer';
import EditTrackingReducer from './EditTrackingReducer';

export default combineReducers({
    trackings: TrackingListReducer,
    createTrackingForm: CreateTrackingReducer,
    editTrackingForm: EditTrackingReducer
});
