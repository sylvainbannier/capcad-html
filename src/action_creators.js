import {generate} from 'shortid';
import {hashHistory} from 'react-router';
export const ADD_IDEA = ADD_IDEA;

export const addIdeaFactory = (randomIdGenerator, history) => entry =>
{
  const newIdeaId = randomIdGenerator();
  history.push('/idea/' + newIdeaId);
  return {
    type: ADD_IDEA,
    entry,
    id: randomIdGenerator()
  }
}


export const addIdea = addIdeaFactory(generate, hashHistory);
