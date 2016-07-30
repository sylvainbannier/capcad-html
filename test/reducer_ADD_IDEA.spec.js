import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
import {getReducer} from '../src/reducer';
const reducer = getReducer(() => "random_id");

describe("reduce", () => {
  describe("ADD_IDEA", () => {
    it('saves added idea to history', () => {
      const initial_state = fromJS({
        events: []
      });
      const action = {type: 'ADD_IDEA', entry: 'my new idea', id: 'random_id'};

      const nextState = reducer(initial_state, action);

      const expectedState = initial_state.updateIn(['events'], arr => arr.push(fromJS(action)));
      expect(nextState).to.equal(expectedState);
    })
  });
});

