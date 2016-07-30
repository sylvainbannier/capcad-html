import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

const AddIdea = React.createClass({
	submit: function() {
		return this.props.addIdea(this.state.input);
	},
  getInitialState: function() {
    return {
      input:""
    };
  },

	render() {
		return (
      <div className="AddIdea">
        <input type="text" value={this.state.input} onChange={(event) => this.setState({input:event.target.value})}/>
        <button onClick={this.submit}>OK</button>
      </div>
		);
	}
});

function mapStateToProps(state) {
  return { }
}

export const AddIdeaContainer = connect(mapStateToProps,actionCreators)(AddIdea);
export default AddIdeaContainer;
