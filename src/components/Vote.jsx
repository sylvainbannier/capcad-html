import React, { PropTypes } from 'react';

const Vote = React.createClass({
	getPair: function() {
		return this.props.pair || [];
	},
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },

	render() {
		return (
      <div className="Vote">
        {this.getPair().map(entry =>
          <button
            key={entry}
            onClick={() => this.props.vote(entry)}
            disabled={this.isDisabled()}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry)?<div>Voted</div>:''}
            </button>
          )}
      </div>
		);
	}
});

Vote.propTypes = {
	hasVoted: PropTypes.string
};

export default Vote;
