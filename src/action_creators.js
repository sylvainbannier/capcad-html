import {generate} from 'shortid';
import {hashHistory} from 'react-router';
import {ADD_IDEA} from './actions';

export const addIdeaFactory = (randomIdGenerator, history) => entry =>
{
  const id = randomIdGenerator();
  const eventId = randomIdGenerator();
  history.push('/idea/' + id);
  return {
    type: ADD_IDEA,
    entry,
    id,
    eventId
  }
}

export const addIdea = addIdeaFactory(generate, hashHistory);
