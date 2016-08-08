import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
import {addIdeaFactory} from './action_creators';
import sinon from 'sinon';

describe("action", () => {
  describe("addIdea", () => {
    let mock = { }
    beforeEach(() => {
      mock.randomIdGenerator = () => "random_id"
      mock.browserHistory = {
        push: sinon.spy()
      };
    });

    it('saves added idea event to history', () => {
      const action = addIdeaFactory(mock.randomIdGenerator,mock.browserHistory)("text");
      expect(action).to.eql({
        type:"ADD_IDEA",
        entry: "text",
        id: "random_id"
      })
    });

    it('changes URL to /idea/random_id', ()=> {
      const action = addIdeaFactory(mock.randomIdGenerator, mock.browserHistory)("text");
      expect(mock.browserHistory.push.called).to.be.ok
    });
  });
});

