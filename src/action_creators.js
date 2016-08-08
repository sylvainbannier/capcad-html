import {generate} from 'shortid';
import {browserHistory} from 'react-router';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote(entry) {
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry
  }
}

export function next(entry) {
  return {
    meta: {remote: true},
    type: 'NEXT'
  }
}

export const addIdeaFactory = (randomIdGenerator, browserHistory) => entry =>
{
  const newIdeaId = randomIdGenerator();
  browserHistory.push(`/idea/{id}`);
  return {
    type: 'ADD_IDEA',
    entry,
    id: randomIdGenerator()
  }
}


export const addIdea = addIdeaFactory(generate, browserHistory);
