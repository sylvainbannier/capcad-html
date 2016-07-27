import {Map, List} from 'immutable';
import shortid from 'shortid';

console.log(shortid.generate());

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

function getAddIdea(randomIdGenerator) {
  return function addIdea(state, entry) {
    console.log(randomIdGenerator.generate());
    return state;
  }
}


function reducer(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'VOTE':
    return vote(state, action.entry);
  case 'ADD_IDEA':
    return getAddIdea(shortid)(state, action.entry);
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
export default getReducer(shortid)
