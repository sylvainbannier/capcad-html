import React, { PropTypes } from 'react';

const AddIdea = React.createClass({
	submit: function() {
		return this.props.addIdea(this.state);
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
        <button onClick={this.submit()}>OK</button>
      </div>
		);
	}
});

export default AddIdea;
