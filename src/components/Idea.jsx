import React from 'react';
import {connect} from 'react-redux';
import {Map} from 'immutable';
import {loadIdea} from '../action_creators.js';

const Idea = React.createClass({
  propTypes: {
    entry:React.PropTypes.string.isRequired,
    loadIdea:React.PropTypes.func.isRequired,
    loading:React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      loading:true
    }
  },
  componentWillMount() {
    if (this.props.params) this.props.loadIdea(this.props.params.id);
  },
  render() {
    return (
      <div className="Idea">
        <h1>{this.props.loading?"loading":this.props.idea.entry}</h1>
      </div>
    )
  }
});

function mapStateToProps(state, props) {
  // TODO: tests this (refer to how to test container components)
  return {
    idea:  state.get('currentIdea', Map()).toJS(),
    loading: !state.has('currentIdea')
  }
}
const actionCreators = {
  loadIdea
}

export {Idea};
export const IdeaContainer = connect(mapStateToProps,actionCreators)(Idea);
export default IdeaContainer;
