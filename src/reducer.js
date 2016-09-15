import {Map} from 'immutable';
import {ADD_IDEA, LOAD_IDEA} from './actions';
import {INITIAL_STATE} from './store';

const addIdea = (state = INITIAL_STATE, action) => state.updateIn( [ 'events' ] , arr => arr.push(
  Map(action)
));

const updateIdeaList = (state = INITIAL_STATE) =>
state.get('events')
.filter((e) => (e.get('type') === ADD_IDEA))
.reduce((prev,current) => prev.updateIn( ['ideaList'], arr => arr.push(Map({
  id:current.get('id'),
  entry:current.get('entry')
}))), state);


const loadIdea  = (state, {id}) =>
state.set(
  'currentIdea',
  state.get('ideaList')
  .filter((ideaListItem) => ideaListItem.get('id') === id)
  .first()
);

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_IDEA:
    return loadIdea(state, action);
  case ADD_IDEA:
    return updateIdeaList(addIdea(state, action));
  default:
    return state;
  }
}

export default reducer
