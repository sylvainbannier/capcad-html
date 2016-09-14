import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {AddIdea} from '../components/AddIdea.jsx';
import {Idea} from '../components/Idea.jsx';
import {EventListItem} from '../components/EventListItem.js';
import {EventList} from '../components/EventList.jsx';

storiesOf('Add idea input', module)
.add('with initial value', () => <AddIdea handleSubmit={action('handleSubmit')} initialValue="Initial value" placeHolder="a great idea"/>)
.add('without initial value', () => <AddIdea handleSubmit={action('handleSubmit')} placeHolder="some greate gift idea"/>);

const addIdeaEvent = {
  text: "look ! a great new gift idea",
  by:"me",
  date: new Date('2016-09-13 15:00')
};
storiesOf('Events list item', module)
.add('with locale and now set', () => <EventListItem event={addIdeaEvent} now={new Date('2016-09-14')} locale='fr_FR'/>)
.add('without locale and now set', () => <EventListItem event={addIdeaEvent}/>)
;

storiesOf('Events list', module)
.add('with events', () => <EventList
  events={[ addIdeaEvent, addIdeaEvent ]}
  handleLoadPreviousEvents={action('loadPreviousEvents') }
  handleLoadNextEvents={action('loadNextEvents') }
  />)
.add('without events', () => <EventList events={[]}/>)
.add('without previous events', () => <EventList
  events={[ addIdeaEvent, addIdeaEvent ]}
  handleLoadNextEvents={action('loadNextEvents') }
  />)
;

