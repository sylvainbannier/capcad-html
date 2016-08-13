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
  componentDidMount: function(){
    this.refs.addIdeaInput.focus();
  },

	render() {
		return (
      <div className="AddIdea">
      <input ref="addIdeaInput" type="text" value={this.state.input} onChange={(event) => this.setState({input:event.target.value})} onKeyPress={ (e) => {if (e.key == "Enter") this.submit(); } }/>
        <button onClick={this.submit} ref="addIdea">OK</button>
      </div>
		);
	}
});

function mapStateToProps(state) {
  return { }
}

export {AddIdea};
export const AddIdeaContainer = connect(mapStateToProps,actionCreators)(AddIdea);
export default AddIdeaContainer;
