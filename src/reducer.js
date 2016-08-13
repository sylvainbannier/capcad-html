import {Map, List, fromJS} from 'immutable';
import {ADD_IDEA} from './actions';
import {INITIAL_STATE} from './store';

const addIdea = (state = INITIAL_STATE, action) => state.updateIn( [ 'events' ] , arr => arr.push(
  Map(action)
));

const updateIdeaList = (state = INITIAL_STATE) =>
state.get('events')
.filter((e) => (e.get('type') == ADD_IDEA))
.reduce((prev,current) => prev.updateIn( ['ideaList'], arr => arr.push(Map({
  id:current.get('id'),
  entry:current.get('entry')
}))), state);

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_IDEA:
    return updateIdeaList(addIdea(state, action));
  }
  return state;
}

export default reducer
