import {Map, List} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}

function initState(state = Map()) {
  if(!state.has('events')) {
    return state.set('events',List());
  }
  return state;
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
}

const addIdea = (state = Map({events:List()}), action) => state.updateIn( [ 'events' ] , arr => arr.push(
  Map(action)
));

function reducer(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'VOTE':
    return vote(state, action.entry);
  case 'ADD_IDEA':
    return addIdea(initState(state), action);
  }
  return state;
}

export default reducer
