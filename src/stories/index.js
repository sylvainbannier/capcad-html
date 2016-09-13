import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {AddIdea} from '../components/AddIdea.jsx';

storiesOf('Add idea input', module)
.add('with initial value', () => (
  <AddIdea handleSubmit={action('handleSubmit')} initialValue="Initial value" placeHolder="a great idea"/>
))
.add('without initial value', () => (
  <AddIdea handleSubmit={action('handleSubmit')} placeHolder="some greate gift idea"/>
));

