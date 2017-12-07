import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function raceReducer(state = initialState.races, action) {
  switch (action.type) {
    case types.LOAD_RACES_SUCCESS:
      return action.races;
    default:
    return state;
  }
}
