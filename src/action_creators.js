import {generate} from 'shortid';
import {browserHistory} from 'react-router';

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
