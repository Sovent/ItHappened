import { combineReducers } from 'redux';
import TrackingListReducer from './TrackingListReducer';

export default combineReducers({
    trackings: TrackingListReducer
});
