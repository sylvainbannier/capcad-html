import React from 'react';
import {connect} from 'react-redux';
import {Map} from 'immutable';
import {loadIdea} from '../action_creators.js';

const Idea = React.createClass({
  propTypes: {
    idea:React.PropTypes.object.isRequired,
    loadIdea:React.PropTypes.func.isRequired,
    loading:React.PropTypes.bool,
    error:React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      loading:true
    }
  },
  componentWillMount() {
    if (this.props.params) this.props.loadIdea(this.props.params.id);
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) this.props.loadIdea(nextProps.params.id);
  },
  render() {
    return (
      <div className="Idea">
        {this.props.error ? <span>{this.props.error}</span> :
        <h1>{this.props.loading?"loading":this.props.idea.entry}</h1>
        }
      </div>
    )
  }
});

function mapStateToProps(state, props) {
  // TODO: tests this (refer to how to test container components)
  return {
    idea:  state.get('currentIdea', Map()).toJS(),
    loading: state.getIn(['currentIdea','loading'],false),
    error: state.getIn(['currentIdea','error'],''),
  }
}
const actionCreators = {
  loadIdea
}

export {Idea};
export const IdeaContainer = connect(mapStateToProps,actionCreators)(Idea);
export default IdeaContainer;
