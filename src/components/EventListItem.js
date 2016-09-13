import React from 'react';
import timeago from 'timeago.js';

export const EventListItem = ({event, now=new Date(), locale='en'}) =>
<div>
  {event.text} <br/>
  by {event.by} <br/>
  {timeago(now).format(event.date,locale)}
</div>

