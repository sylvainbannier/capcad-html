import {Map, List} from 'immutable';

const INITIAL_STATE = Map({
  events: List(),
  ideaList: List()
});

const addIdea = (state = Map({events:List()}), action) => state.updateIn( [ 'events' ] , arr => arr.push(
  Map(action)
));

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_IDEA':
    return addIdea(state, action);
  }
  return state;
}

export {INITIAL_STATE};

export default reducer
