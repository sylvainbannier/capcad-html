import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AddIdea from './AddIdea';
import EventList from './EventList';
import * as actionCreators from '../action_creators';

const Home = React.createClass({
  mixins: [PureRenderMixin],
	render() {
		return (
      <div className="home">
        <Link to="/addidea">addIdea</Link>
        <EventList/>
      </div>
		);
	}
});

function mapStateToProps(state) {
  return {
    // pair: state.getIn([ 'vote', 'pair' ]),
    // hasVoted: state.get('hasVoted'),
    // winner: state.get('winner')
  }
}

export const HomeContainer = connect(mapStateToProps, actionCreators )( Home)

export default Home;
