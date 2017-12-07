import {combineReducers} from 'redux';
import races from './raceReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  races,
  ajaxCallsInProgress
});

export default rootReducer;
