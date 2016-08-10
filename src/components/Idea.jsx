import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

const Idea = React.createClass({
	render() {
		return (
      <div className="Idea">IDEA</div>
		);
	}
});

function mapStateToProps(state) {
  return { }
}

export {Idea};
export const IdeaContainer = connect(mapStateToProps,actionCreators)(Idea);
export default IdeaContainer;
