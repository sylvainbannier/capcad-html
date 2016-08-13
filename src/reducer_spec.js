import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
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
      expect(nextState.get('events')).to.equal(expectedStateEvents);
    });

    /*
     * should I really add to idea List ? ou should à build idea list when needed as there might be updates from server (with performances issues ?)
     * Solutions :
     * - build idea list with corresponding initial synced action as starting point always keep last synced list though which can only be sent by server
     * - regenerate this list on each event update ?
     * is it premature optimisation ?
     */
    it('adds idea to the idea list', () => {
      const expectedStateIdeaList = INITIAL_STATE.updateIn(['ideaList'], arr => arr.push(Map({
        entry: "my new idea",
        id: "random_id"
      }))).get('ideaList');
      expect(nextState.get('ideaList')).to.equal(expectedStateIdeaList);
    });
  });
});

