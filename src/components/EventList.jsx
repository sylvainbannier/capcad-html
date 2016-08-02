import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

const EventList = React.createClass({
	render() {
    const events = this.props.events;
    const eventsCmp = events?events.map(props => <div>{props.entry}</div>):"";
		return (
      <div className="EventList">
        {eventsCmp}
      </div>
		);
	}
});

function mapStateToProps(state) {
  return {
    events: state.get('events')?state.get('events').toJS():[]
  }
}

export {EventList};
export const EventListContainer = connect(mapStateToProps,actionCreators)(EventList);
export default EventListContainer;
