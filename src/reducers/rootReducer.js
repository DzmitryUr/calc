import { combineReducers } from 'redux';
import value from './simpleReducer';
import filter from './secondReducer';

export default combineReducers({
 value,
 filter
});