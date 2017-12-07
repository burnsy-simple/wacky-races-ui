import * as types from './actionTypes';
import raceApi from '../api/raceApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadRacesSuccess(races) {
  return { type: types.LOAD_RACES_SUCCESS, races};
}

export function loadRaceSuccess(race) {
  return { type: types.LOAD_RACE_SUCCESS, race};
}

export function loadRaces() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return raceApi.getRaces().then(races => {
      dispatch(loadRacesSuccess(races.races));
    }).catch(error => {
      throw(error);
    });
  };
}
