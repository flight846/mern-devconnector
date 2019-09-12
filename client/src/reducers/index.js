import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReaducer from './authReaducer';

export default combineReducers({
    alert: alertReducer,
    auth: authReaducer
})