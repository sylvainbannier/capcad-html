import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {INITIAL_STATE} from '../src/reducer';

describe("reduce", () => {
  describe("ADD_IDEA", () => {
    it('saves added idea event to history', () => {
      const action = {type: 'ADD_IDEA', entry: 'my new idea', id: 'random_id'};
      const nextState = reducer(INITIAL_STATE, action);
      const expectedState = INITIAL_STATE.updateIn(['events'], arr => arr.push(fromJS(action)));
      expect(nextState).to.equal(expectedState);
    });

    it('adds idea to the idea list');
  });
});

