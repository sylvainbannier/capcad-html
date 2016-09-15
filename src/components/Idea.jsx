import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

const Idea = ({idea: {entry}}) =>
<div className="Idea">
  <h1>{entry}</h1>
</div>

Idea.propTypes = {
  entry:React.PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  // TODO: tests this (refer to how to test container compoenents)
  return {
    idea: state.get('ideaList').filter((ideaListItem) => ideaListItem.get('id') === props.params.id).first().toJS()
  }
}

export {Idea};
export const IdeaContainer = connect(mapStateToProps,actionCreators)(Idea);
export default IdeaContainer;
