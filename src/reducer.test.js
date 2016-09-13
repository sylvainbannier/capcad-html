import { List, Map, fromJS } from 'immutable';
import reducer from './reducer';
import {INITIAL_STATE} from './store';
import {ADD_IDEA} from './actions';

describe("reduce", () => {
  describe("ADD_IDEA", () => {
    let nextState;
    const action = {type: ADD_IDEA, entry: 'my new idea', id: 'random_id', eventId: 'random_id'};

    beforeEach(() => {
      nextState = reducer(INITIAL_STATE, action);
    })

    it('saves added idea event to history', () => {
      const expectedStateEvents = INITIAL_STATE.updateIn(['events'], arr => arr.push(fromJS(action))).get('events');
      expect(nextState.get('events')).toEqual(expectedStateEvents);
    });

    it('adds idea to the idea list', () => {
      const expectedStateIdeaList = INITIAL_STATE.updateIn(['ideaList'], arr => arr.push(Map({
        id: "random_id",
        entry: "my new idea"
      }))).get('ideaList');
      expect(nextState.get('ideaList')).toEqual(expectedStateIdeaList);
    });
  });
});

