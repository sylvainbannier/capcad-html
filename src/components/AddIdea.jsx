import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {addIdea} from '../action_creators.js';

const AddIdea = React.createClass({
  propTypes: {
    handleSubmit: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    initialValue: PropTypes.string
  },
	handleSubmit: function() {
		return this.props.handleSubmit(this.state.input);
	},
  getInitialState: function() {
    return {
      input:this.props.initialValue || ''
    };
  },
  componentDidMount: function(){
    this.refs.addIdeaInput.focus();
  },

	render() {
    const updateInput = (e) => this.setState({input:e.target.value})
    const handleEnter = (e) => {if (e.key === "Enter") this.handleSubmit(); }

		return (
      <div className="AddIdea">
      <input ref="addIdeaInput" type="text" value={this.state.input} onChange={updateInput} onKeyPress={handleEnter} placeholder={this.props.placeHolder}/>
        <button onClick={this.handleSubmit} ref="addIdea">OK</button>
      </div>
		);
	}
});

function mapStateToProps(state) {
  return { }
}
const actionCreators = {
  handleSubmit:addIdea
}

export {AddIdea};
export const AddIdeaContainer = connect(mapStateToProps,actionCreators)(AddIdea);
export default AddIdeaContainer;
