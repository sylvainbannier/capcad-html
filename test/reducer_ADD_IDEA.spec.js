import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe("reduce", () => {
  describe("ADD_IDEA", () => {
    it('saves added idea event to history', () => {
      const initial_state = fromJS({ events: [] });
      const action = {type: 'ADD_IDEA', entry: 'my new idea', id: 'random_id'};
      const nextState = reducer(initial_state, action);
      const expectedState = initial_state.updateIn(['events'], arr => arr.push(fromJS(action)));
      expect(nextState).to.equal(expectedState);
    });

    it('adds idea to the idea list');
    it('opens the created idea');
  });
});

