import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe("reduce", () => {
  describe("SET_STATE", () => {
    let initial_state;
    const final_state = Map({
      events: Map()
    });

    beforeEach(() => {
      initial_state = Map();
    })

    it("handles SET_STATE", () => {
      const action = {
        type: 'SET_STATE',
        state: final_state
      };
      const nextState = reducer(initial_state, action);
      expect(nextState).to.equal(final_state);
    });

    it('handles SET_STATE with plain JS payload', () => {
      const action = {
        type: 'SET_STATE',
        state: {
          events: {}
        }
      };
      const nextState = reducer(initial_state, action);
      expect(nextState).to.equal(final_state);
    });

    it('handles SET_STATE without initial state', () => {
      const action = {
        type: 'SET_STATE',
        state: final_state
      };
      const nextState = reducer(undefined, action);
      expect(nextState).to.equal(final_state);
    });
  });

});

