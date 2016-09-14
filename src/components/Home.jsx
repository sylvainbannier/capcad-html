import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actionCreators from '../action_creators';

const Home = React.createClass({
	render() {
		return (
      <div className="home">
        <Link to="/idea">new idea</Link>
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
