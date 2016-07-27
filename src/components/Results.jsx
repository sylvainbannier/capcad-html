import * as actionCreators from '../action_creators';
import React, { PropTypes } from 'react';
import Winner from './Winner';
import {connect} from 'react-redux';

const Results = React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  getVotes: function(entry) {
    return (this.props.tally && this.props.tally.has(entry))?this.props.tally.get(entry):0
  },
	render() {
		return (
      this.props.winner?
      <Winner ref="winner" winner={this.props.winner}/>:
      <div className="results">
        {this.getPair().map(
          entry =>
          <div key={entry} className="voteCount">
            <h1>{entry}
            </h1>
            <div>
              {this.getVotes(entry)}
              </div>
            </div>
          )}
          <div className="management">
            <button ref="next"
              className="next"
              onClick={this.props.next}>
              Next
            </button>
          </div>
      </div>
    );
	}
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps,actionCreators)(Results);

export default Results;
