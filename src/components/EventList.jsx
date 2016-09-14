import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {EventListItem} from './EventListItem.js';

const EventList = ( {
  events=[],
  handleLoadNextEvents,
  handleLoadPreviousEvents
}) =>
<div className="EventList">
  <button onClick={handleLoadNextEvents} >next events</button>
  {events.map((event, key) => <EventListItem key={key} event={event}/>)}
  {handleLoadPreviousEvents && <button onClick={handleLoadPreviousEvents} >Previous events</button>}
</div>

EventList.propTypes = {
  events: PropTypes.array,
  handleLoadNextEvents: PropTypes.func,
  handleLoadPreviousEvents: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    events: state.get('events')?state.get('events').toJS():[]
  }
}

export {EventList};
export const EventListContainer = connect(mapStateToProps,actionCreators)(EventList);
export default EventListContainer;
