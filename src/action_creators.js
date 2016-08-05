import {generate} from 'shortid';

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

export function addIdea(entry) {
  return {
    type: 'ADD_IDEA',
    entry,
    id: generate()
  }
}
