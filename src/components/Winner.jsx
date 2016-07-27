import React, { PropTypes } from 'react';

const Winner = React.createClass({
	render() {
		return (
      <div>Winner is {this.props.winner}</div>
    );
	}
});

Winner.propTypes = {
	winner: PropTypes.string
};

export default Winner;
