import {Map, List} from 'immutable';
import {generate} from 'shortid';

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

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
}

const getAddIdea = (randomIdGenerator) => (state, entry) => {
  const newState = state.updateIn(
    [ 'events' ] ,
    arr => arr.push(
      Map({
      type: 'ADD_IDEA',
      entry: entry,
      id: randomIdGenerator()
    })
    )
  );
  return newState;
}


function reducer(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'VOTE':
    return vote(state, action.entry);
  case 'ADD_IDEA':
    return getAddIdea(generate)(state, action.entry);
  }
  throw new Error("UNKNOWN_ACTION")
  return state;
}

const getReducer = (randomIdGenerator) => {
  return function reducer(state = Map(), action) {
    switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry);
    case 'ADD_IDEA':
      return getAddIdea(randomIdGenerator)(state, action.entry);
    }
    throw new Error("UNKNOWN_ACTION")
    return state;
  }
}
export {getReducer};
export default getReducer(generate)
