import expect from 'expect';
import * as raceActions from './raceActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_RACES_SUCCESS when loading races', (done) => {
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_RACES_SUCCESS, body: {races: [{id: 'clean-race', title: 'Pure as snow'}]}}
    ];

    const store = mockStore({races: []}, expectedActions, done);
    store.dispatch(raceActions.loadRaces()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_RACES_SUCCESS);
      done();
    });
  });
});
