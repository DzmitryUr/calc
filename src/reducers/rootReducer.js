import { combineReducers } from 'redux';
import display from './displayData';
import filter from './secondReducer';

export default combineReducers({
 display,
 filter
});